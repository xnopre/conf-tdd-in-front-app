import classnames from 'classnames';

import { Expedition } from '../../types';

import style from './PreviewExpe.module.scss';

interface Props {
    expedition: Expedition;
    onExpeditionClicked: () => void;
}

const PreviewExpe = ({ expedition, onExpeditionClicked }: Props) => {
    return <li>{expedition.name}</li>;
};

export default PreviewExpe;
