const getTotalPrice = arr => {
    let sum = arr.reduce((acc, el) => acc + el);
    let floor = Math.floor(sum * 100) / 100;
    return '$' + floor;

};