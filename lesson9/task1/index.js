const getAdults = obj =>
    Object.entries(obj)
    .filter(person => person[1] >= 18)
    .map(person => person[0]);