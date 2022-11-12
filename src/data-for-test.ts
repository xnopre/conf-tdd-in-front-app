import { Expedition } from './types';

export const expe1: Expedition = {
    name: 'ski dans le grand nord',
    uid: '123',
    description:
        'Voyage sportif dans le grand nord, en ski de randonnée, en itinérant sur une semaine, à la conquête des sommets',
    level: 'Moyen',
    country: 'Norvège',
    placesCount: 8,
};

export const expe2: Expedition = {
    name: 'raquette dans le grand nord',
    uid: '124',
    description:
        'Voyage tranquille dans le grand nord, à la rencontre des habitants, de la culture locale et des animaux sauvages',
    level: 'Facile',
    country: 'Norvège',
    placesCount: 12,
};

export const expe3: Expedition = {
    name: 'voile en atlantique',
    uid: '125',
    description:
        'Sortie en pleine mer, sur un long week-end, à la découverte du grand large et des mammifères marins',
    level: 'Facile',
    country: 'France',
    placesCount: 5,
};

export const expe4: Expedition = {
    name: 'Croix de Belledonne',
    uid: '126',
    description: 'Ascension du plus célèbre somme de la chaine de Belledonne',
    level: 'Difficile',
    country: 'France',
    placesCount: 3,
};

export const listExpe1 = [expe1, expe2, expe3];
