import { HomeView } from "./HomeView";

export class AppStart {
    static start() {
        cy.visit('http://localhost:3000/');
        return new HomeView();
    }

}