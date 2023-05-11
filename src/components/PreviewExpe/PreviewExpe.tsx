import classnames from 'classnames';

import { Expedition } from '../../types';

import style from './PreviewExpe.module.scss';

interface Props {
    expedition: Expedition;
}

const PreviewExpe = ({ expedition }: Props) => {
    return <li>{expedition.name}</li>;
};

export default PreviewExpe;
