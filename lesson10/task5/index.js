const getTotalPrice = arr => {
    let sum = arr.reduce(el => el + el);
    let round = Math.floor(sum * 100) / 100;
    return sum + round;

};