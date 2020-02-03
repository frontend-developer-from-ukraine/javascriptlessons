const superRound = (number, rounding) => {

    const calculation = Math.pow(10, rounding);

    return [
        Math.floor(number * calculation) / calculation,
        Math.round(number * calculation) / calculation,
        Math.ceil(number * calculation) / calculation,
        Math.trunc(number * calculation) / calculation, +number.toFixed(rounding)
    ];

}

//HW 3. Округление чисел до указанной точности
//1. Создать стрелочную функцию 
//2. два аргумента на вход 
//3. работа с метадами 
//4. вернуть массив