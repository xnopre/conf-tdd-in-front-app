import { AppStart } from '../pages/AppStart';

describe('spec', () => {
    it('must do standard operations', () => {
        cy.server();
        AppStart.start();
    });
});
