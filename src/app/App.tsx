import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';

import HomeView from '../views/HomeView/HomeView';
import About from '../views/About/About';
import { store } from '../redux';

import style from './App.module.scss';
import { fetchExpeditions } from '../redux/app/app';
import { fetchExpeditionDetails } from '../redux/temp/temp';
import DetailsExpe from '../views/DetailsExpe/DetailsExpe';
import CreateExpe from '../views/CreateExpe/CreateExpe';

const LocationListener = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/') {
            store.dispatch(fetchExpeditions());
        } else if (location.pathname.match(/\/expedition\/(.*?)$/)) {
            const uid = location.pathname.match(/\/expedition\/(.*?)$/)![1];
            store.dispatch(fetchExpeditionDetails(uid));
        }
    }, [location]);
    return <></>;
};

const App = () => {
    return (
        <div className={style.App}>
            <Provider store={store}>
                <BrowserRouter>
                    <LocationListener />
                    <div className="main p-1 m-6">
                        <nav className="navbar" role="navigation" aria-label="main navigation">
                            <div id="navbarBasicExample" className="navbar-brand">
                                <Link data-cy={'home'} className="navbar-item" to="/">
                                    Home
                                </Link>
                                <Link data-cy={'about'} className="navbar-item" to="/about">
                                    About
                                </Link>
                            </div>
                        </nav>
                        <Routes>
                            <Route path="/" element={<HomeView />} />
                            <Route path="/expedition/:id" element={<DetailsExpe />} />
                            <Route path="/createExpedition/" element={<CreateExpe />} />
                            <Route path="/about" element={<About />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </Provider>
        </div>
    );
};

export default App;
