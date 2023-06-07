import classnames from 'classnames';

import { Expedition } from '../../types';

import style from './PreviewExpe.module.scss';

interface Props {
    expedition: Expedition;
    onExpeditionClicked: () => void;
}

const PreviewExpe = ({ expedition, onExpeditionClicked }: Props) => {
    return (
        <div className={classnames('card', 'mb-4')} onClick={() => onExpeditionClicked()}>
            <div className="card-content">
                <div className={classnames('content', style.content)}>
                    <h1>{expedition.name}</h1>
                </div>
                {expedition.description}
                <div>
                    <span className={'tag is-info'}>Reste {expedition.placesCount} places</span>
                    &nbsp;
                    <span className={'tag is-info'}>{expedition.country}</span>
                </div>
            </div>
        </div>
    );
};

export default PreviewExpe;
