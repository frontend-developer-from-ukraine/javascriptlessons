const multiRound = num => [
    (Math.floor(num * 100)) / 100,
    (Math.round(num * 100)) / 100,
    (Math.ceil(num * 100)) / 100,
    (Math.trunc(num * 100)) / 100, +num.toFixed(2)
];

const num = 4.6543;
console.log(multiRound(num)); //(5) [4.65, 4.65, 4.66, 4.65, 4.65]

// Округление чисел (алгоритм):
//1.	Создаем стрелочную функцию 
//2.	Функция принимает число и вернуть массив
//3.    Наполняем массив методами
//4.	У нас один return , можем убрать его и скобки