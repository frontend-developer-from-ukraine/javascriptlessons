const getTotalPrice = arr => {
    let sum = arr.reduce((acc, el) => acc + el);
    let round = Math.floor(sum * 100) / 100;
    return "$" + round;
};
const prices = [56.23, 566.45345, 4.3435]; // $627.02
console.log(getTotalPrice(prices));

//сумма дробных чисел (Алгоритм)
//1. Создать переменную - сложить ценны через метод массивов 
//2. Создать переменную - округлить 
//3. вернуть сумму с округлением