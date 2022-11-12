import { configureStore } from '@reduxjs/toolkit';

import app from './app/app';
import temp from './temp/temp';

const reducers = {
    app,
    temp,
};

export const store = configureStore({
    reducer: reducers,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
