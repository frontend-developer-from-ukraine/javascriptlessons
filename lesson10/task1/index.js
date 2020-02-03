const getFiniteNumbers = arr => // выводит только числа 
    arr.filter(el => Number.isFinite(el));

const getFiniteNumbersV2 = arr => // вывело и числа и строки
    arr.filter(el => isFinite(el));

const getNaN = arr => // вывело пустой массив
    arr.filter(el => Number.isNaN(el));

const getNaNV2 = arr => // только текст
    arr.filter(el => isNaN(el));

const getIntegers = arr => // вывело только целое число 
    arr.filter(el => Number.isInteger(el));



const elementList = [5, 5, 6.6, 4.3, '55', 'text'];
console.log(getIntegers(elementList));

// . Проверка чисел(алгоритм):
// 1.	создать функцию 
// 2.	которая принимает массив 
// 3.	Отфильтровать + Поиск чисел