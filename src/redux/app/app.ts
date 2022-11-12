import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Expedition } from '../../types';
import { HttpRequester } from '../../utils/HttpRequester';

export interface AppState {
    expeditions: Expedition[];
}

interface ReturnedGetExpeditions {
    expeditions: Expedition[];
}

export const fetchExpeditions = createAsyncThunk('app/fetchExpeditions', async () => {
    return await HttpRequester.getJson<ReturnedGetExpeditions>('/api/expeditions/').then(
        (json) => json.expeditions
    );
});

const initialState: AppState = {
    expeditions: [],
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchExpeditions.fulfilled, (state, action) => {
            state.expeditions = action.payload;
        });
    },
});

export default appSlice.reducer;
