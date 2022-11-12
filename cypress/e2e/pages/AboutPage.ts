import { HomeView } from './HomeView';

export class AboutPage {
    checkContent() {
        cy.contains('About');
        return this;
    }

    goToHome() {
        cy.get('[data-cy="home"]').click();
        return new HomeView();
    }
}
