import { store } from '../index';
import { fetchExpeditions } from './app';
import { HttpRequester } from '../../utils/HttpRequester';

import { expe1, expe2 } from '../../data-for-test';

describe('Redux App', () => {
    it('changes light state to ON', async () => {
        HttpRequester.getJson = jest.fn((url) => {
            if (url === '/expeditions/') {
                return Promise.resolve({
                    expeditions: [expe1, expe2],
                }) as Promise<any>;
            }
            throw Error('URL non supportée : ' + url);
        });

        expect(store.getState().app.expeditions).toEqual([]);

        await store.dispatch(fetchExpeditions());

        expect(store.getState().app.expeditions).toEqual([expe1, expe2]);
    });
});
