import { store } from '../index';
import { fetchExpeditionDetails } from './temp';
import { HttpRequester } from '../../utils/HttpRequester';

import { expe1 } from '../../data-for-test';

describe('Redux Temp', function () {
    it('fetches and stores expedition details', async function () {
        HttpRequester.getJson = jest.fn((url) => {
            if (url === '/ExpeditionDetails/2') {
                return Promise.resolve({
                    expedition: expe1,
                }) as Promise<any>;
            }
            throw Error('URL non supportée : ' + url);
        });

        expect(store.getState().temp.expedition).not.toBeDefined();

        await store.dispatch(fetchExpeditionDetails('2'));

        expect(store.getState().temp.expedition).toEqual(expe1);
    });
});
