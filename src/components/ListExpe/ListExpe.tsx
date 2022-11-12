import classnames from 'classnames';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RootState } from '../../redux';
import { Expedition } from '../../types';
import PreviewExpe from '../PreviewExpe/PreviewExpe';

import style from './ListExpe.module.scss';

interface PropsConnect {
    expeditions: Expedition[];
}

interface PropsForRouter {
    onExpeditionClicked: (uid: string) => void;
}

type Props = PropsConnect & PropsForRouter;

export const ListExpe = ({ expeditions, onExpeditionClicked }: Props) => {
    return (
        <div className={classnames(style.ListExpe)}>
            <h1>Liste des expéditions</h1>
            <div className={style.container}>
                <div className={style.list}>
                    {expeditions.length === 0 && <span>Aucune expédition</span>}
                    {expeditions.map((expedition) => (
                        <PreviewExpe
                            expedition={expedition}
                            key={expedition.uid}
                            onExpeditionClicked={() => {
                                onExpeditionClicked(expedition.uid);
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const ListExpeWithRouter = (props: PropsConnect) => {
    const navigate = useNavigate();
    return (
        <ListExpe
            {...props}
            onExpeditionClicked={(uid: string) => {
                navigate(`/expedition/${uid}`);
            }}
        />
    );
};

const mapStateToProps = (state: RootState): PropsConnect => ({
    expeditions: state.app.expeditions,
});

export default connect(mapStateToProps)(ListExpeWithRouter);
