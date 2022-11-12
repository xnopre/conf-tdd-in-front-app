const expe1 = {
    name: 'ski dans le grand nord',
    description:
        'Voyage sportif dans le grand nord, en ski de randonnée, en itinérant sur une semaine, à la conquête des sommets',
    level: 'Moyen',
    country: 'Norvège',
    placesCount: 8,
};

const expe2 = {
    name: 'raquette dans le grand nord',
    description:
        'Voyage tranquille dans le grand nord, à la rencontre des habitants, de la culture locale et des animaux sauvages',
    level: 'Facile',
    country: 'Norvège',
    placesCount: 12,
};

const expe3 = {
    name: 'voile en atlantique',
    description:
        'Sortie en pleine mer, sur un long week-end, à la découverte du grand large et des mammifères marins',
    level: 'Facile',
    country: 'France',
    placesCount: 5,
};

const expe4 = {
    name: 'Croix de Belledonne',
    description: 'Ascension du plus célèbre somme de la chaine de Belledonne',
    level: 'Difficile',
    country: 'France',
    placesCount: 3,
};

const expeditions = [
    expe1,
    expe2,
    expe3,
    expe4,
    expe1,
    expe2,
    expe3,
    expe4,
    expe1,
    expe2,
    expe3,
    expe4,
].map((expe, index) => {
    return {
        ...expe,
        uid: '' + index,
    };
});

const REGEXP_GET_EXPE_DETAILS = /\/ExpeditionDetails\/(.*?)$/;

module.exports = function (app) {
    app.use(function (req, res, next) {
        if (req.url.includes('/version/')) {
            res.send({
                version: '1.0.0',
            });
        } else if (req.url.includes('/expeditions/')) {
            res.send({
                expeditions,
            });
        } else if (req.url.match(REGEXP_GET_EXPE_DETAILS)) {
            const uid = req.url.match(REGEXP_GET_EXPE_DETAILS)[1];
            const expedition = expeditions.find((expe) => expe.uid === uid);
            res.send({
                expedition,
            });
        } else if (req.url.includes('/expedition')) {
            let content = '';
            req.on('data', (chunk) => {
                content += chunk;
            });
            req.on('end', () => {
                if (content) {
                    const data = JSON.parse(content);
                    const uid = '' + expeditions.length;
                    expeditions.push({
                        name: data.name,
                        uid,
                        description: '',
                        level: data.level,
                        country: data.country,
                        placesCount: data.placesCount,
                    });
                    res.send({ uid });
                } else {
                    res.send();
                }
            });
        } else {
            next();
        }
    });
};
