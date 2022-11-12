import { AboutPage } from './AboutPage';
import { ExpeditionPage } from './ExpeditionPage';

export class HomeView {
    checkContent() {
        cy.contains('Ajouter une expédition');
        return this;
    }

    goToAbout() {
        cy.get('[data-cy="about"]').click();
        return new AboutPage();
    }

    clickOnExpe() {
        cy.contains('ski dans le grand nord').click();
        return new ExpeditionPage();
    }
}
