import { HomeView } from './HomeView';

export class ExpeditionPage {
    checkContent() {
        cy.contains(
            'Voyage sportif dans le grand nord, en ski de randonnée, en itinérant sur une semaine, à la conquête des sommets'
        );
        return this;
    }

    goToHome() {
        cy.get('[data-cy="home"]').click();
        return new HomeView();
    }
}
