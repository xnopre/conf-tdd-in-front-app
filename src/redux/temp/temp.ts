import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Expedition } from '../../types';
import { HttpRequester } from '../../utils/HttpRequester';

export interface TempState {
    expedition?: Expedition;
}

const initialState: TempState = {
    expedition: undefined,
};

export const fetchExpeditionDetails = createAsyncThunk(
    'temp/fetchExpeditionDetails',
    async (id: string) => {
        return await HttpRequester.getJson<{ expedition: Expedition }>(
            `/ExpeditionDetails/${id}`
        ).then((json) => {
            return json.expedition;
        });
    }
);

export const tempSlice = createSlice({
    name: 'temp',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchExpeditionDetails.fulfilled, (state, action) => {
            state.expedition = action.payload;
        });
    },
});

export default tempSlice.reducer;
