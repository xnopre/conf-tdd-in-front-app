import { HomeView } from './HomeView';

export class AboutPage {
    checkContentPageAbout() {
        cy.contains('About');
        return this;
    }

    goToHome() {
        cy.get('[data-cy="home"]').click();
        return new HomeView();
    }
}
