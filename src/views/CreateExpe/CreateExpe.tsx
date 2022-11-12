import classnames from 'classnames';
import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { HttpRequester } from '../../utils/HttpRequester';
import { ExpeditionLevel } from '../../types';

import style from './CreateExpe.module.scss';

interface PropsDispatch {
    onSubmit: (name: string, level: ExpeditionLevel, country: string, placesCount: number) => void;
}

export const CreateExpe = ({ onSubmit }: PropsDispatch) => {
    const refInputName = React.createRef<HTMLInputElement>();
    const refInputLevel = React.createRef<HTMLSelectElement>();
    const refInputCountry = React.createRef<HTMLInputElement>();
    const refInputPlacesCount = React.createRef<HTMLSelectElement>();

    const onHandleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const name = refInputName.current?.value;
        const levelStr = refInputLevel.current?.value;
        const country = refInputCountry.current?.value;
        const placesCountStr = refInputPlacesCount.current?.value;
        if (!name || !levelStr || !country || !placesCountStr) {
            alert('Tous les champs doivent être remplis');
            return;
        }
        onSubmit(name, levelStr as ExpeditionLevel, country, parseInt(placesCountStr));
    };

    return (
        <div className={classnames(style.ListExpe, 'content')}>
            <h1>Creation d'une expédition</h1>
            <form onSubmit={onHandleSubmit}>
                <div className="field">
                    <label className="label" htmlFor="name">
                        Nom
                    </label>
                    <div className="control">
                        <input
                            data-testid="name"
                            className="input"
                            type="text"
                            ref={refInputName}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label" htmlFor="name">
                        Niveau
                    </label>
                    <div className="control">
                        <div className="select">
                            <select data-testid="level" ref={refInputLevel}>
                                <option value={'Facile'}>Facile</option>
                                <option value={'Moyen'}>Moyen</option>
                                <option value={'Difficile'}>Difficile</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label className="label" htmlFor="name">
                        Pays
                    </label>
                    <div className="control">
                        <input
                            data-testid="country"
                            className="input"
                            type="text"
                            ref={refInputCountry}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label" htmlFor="name">
                        Places
                    </label>
                    <div className="control">
                        <div className="select">
                            <select data-testid="placesCount" ref={refInputPlacesCount}>
                                {Array(15)
                                    .fill(0)
                                    .map((v, i) => (
                                        <option value={i + 1} key={i}>
                                            {i + 1}
                                        </option>
                                    ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <input type="submit" className="button is-link" value="Créer" />
                    </div>
                    {/* <div className="control">
                    <button className="button is-light">Annuler</button>
                </div> */}
                </div>
            </form>
        </div>
    );
};

const CreateExpeWithRouter = () => {
    const navigate = useNavigate();
    return (
        <CreateExpe
            onSubmit={(
                name: string,
                level: ExpeditionLevel,
                country: string,
                placesCount: number
            ) => {
                HttpRequester.postJson<{ uid: string }>('/expedition', {
                    name,
                    level,
                    country,
                    placesCount,
                }).then((json) => {
                    navigate(`/expedition/${json.uid}`);
                });
            }}
        />
    );
};

export default CreateExpeWithRouter;
