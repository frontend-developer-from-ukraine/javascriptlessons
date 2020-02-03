const getParsedIntegers = arr =>
    arr.map(el => Number.parseInt(el)); // (8) [5, 5, 6, 6, NaN, NaN, NaN, NaN]

const getParsedIntegersV2 = arr =>
    arr.map(el => parseInt(el)); // (8) [5, 5, 6, 6, NaN, NaN, NaN, NaN]  - извлекаем целое число

const getParsedFloats = arr =>
    arr.map(el => Number.parseFloat(el)); // (8) [5, 5, 6, 6, NaN, NaN, Infinity, NaN]

const getParsedFloatsV2 = arr =>
    arr.map(el => parseFloat(el)); // (8) [5, 5, 6, 6, NaN, NaN, Infinity, NaN]

const elementList = [5, 5, 6, ' 6,4', null, NaN, Infinity, undefined];
console.log(getParsedIntegers(elementList));

//Парсинг чисел(алгоритм):
//1.	создаем стрелочную функцию 
//2.	которая принимает массив 
//3.	Пройтись по массиву + парсинг
//4.	создать массив и туда передать числа
//5.	вывести функцию с массивом 
//6.	сократить