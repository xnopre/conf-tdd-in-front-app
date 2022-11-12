export type ExpeditionLevel = 'Facile' | 'Moyen' | 'Difficile';

export type Expedition = {
    name: string;
    uid: string;
    description: string;
    level: ExpeditionLevel;
    country: string;
    placesCount: number;
};
