const cleanTransactionsList = arr => {
    return arr
        .filter(a => isNaN(a))
        .map(a => '$' + (a)
            .toFixed(2));
};