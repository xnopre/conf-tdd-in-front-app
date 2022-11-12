import classnames from 'classnames';
import { connect } from 'react-redux';

import { RootState } from '../../redux';
import { Expedition } from '../../types';

import style from './DetailsExpe.module.scss';

import gre from './grenoble.jpg';

interface PropsConnect {
    expedition?: Expedition;
}

export const DetailsExpe = ({ expedition }: PropsConnect) => {
    if (!expedition) {
        return <div>Chargement en cours...</div>;
    }
    return (
        <div className={classnames(style.DetailsExpe, 'content')}>
            <h1>
                {expedition.name} ({expedition.uid})
            </h1>
            <div className="box">{expedition.description}</div>
            <div>Niveau : {expedition.level}</div>
            <div>Pays : {expedition.country}</div>
            <img src={gre} />
        </div>
    );
};

const mapStateToProps = (state: RootState): PropsConnect => ({
    expedition: state.temp.expedition,
});

export default connect(mapStateToProps)(DetailsExpe);
