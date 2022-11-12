import React from 'react';
import { Link } from 'react-router-dom';

import ListExpe from '../../components/ListExpe/ListExpe';

export const HomeView = () => {
    return (
        <div id="HomeView" className="HomeView content">
            <Link data-cy={'home'} className="button is-primary mb-4" to="/createExpedition/">
                <span className="icon-text">
                    <span className="icon">
                        <i className="fas fa-plus"></i>
                    </span>
                    <span>Ajouter une expédition</span>
                </span>
            </Link>
            <ListExpe />
        </div>
    );
};

export default HomeView;
