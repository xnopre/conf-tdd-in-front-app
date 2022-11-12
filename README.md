> Petite application de démo pour la session "Je développe des apps front et pourtant j'aime le TDD"

# Commandes disponibles

### `npm start`

Lance l'application en mode "développement" (avec rafraichissement automatique
lorsqu'il y a des modifications du code) et ouvre le navigateur sur la page
[http://localhost:3000](http://localhost:3000).

Un proxy est également disponible (fichier `src/setupProxy.js`) permettant
de répondre aux requêtes de l'application avec des données fictives.

### `npm test`

Lance l'exécution des tests automatisés en mode Watch.

Ces tests incluent tous les tests unitaires "classiques" mais également
la vérification des snapshots de `Stroybook` (via `Storyshot`).

Attention, par défaut, `Jest` n'exécute que les tests concernés par les modifications
en cours et qui ne sont pas encore commitées. L'option 'a' permet de forcer `Jest`
à exécuter tous les tests.

### `npm run storybook`

Lance le serveur `Storybook` et ouvre le navigateur.

### `npm run cypress`

Ouvre l'outil `Cypress` notamment pour lancer les tests end-to-end.

### `npm run cypress-run`

Lance les tests `Cypress` sans passer pour l'outil IHM de `Cypress`.

