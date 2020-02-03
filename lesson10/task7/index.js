const superRound = (number, rounding) => {

    const calculation = Math.pow(10, rounding);

    return [
        Math.floor(number * calculation) / calculation,
        Math.round(number * calculation) / calculation,
        Math.ceil(number * calculation) / calculation,
        Math.trunc(number * calculation) / calculation, +(num.toFixed(rounding))
    ];

}