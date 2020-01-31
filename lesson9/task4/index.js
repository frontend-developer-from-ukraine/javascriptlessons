const getPeople = obj => Object.values(obj)
    .reduce((acc, elem) => acc.concat(), [])
    .map(elem => elem);
ы