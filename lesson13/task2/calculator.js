export const getSquaredArray = arr => // перед функцией указываем export - что дает добро на экспорт для теста
    arr.map(num => num * num); // пройтись по массиву и возвести в квадрат все элтиенты , квадрат это число умножить на самого себя


export const getOddNumbers = numbers =>
    numbers.filter(num => (num % 2 === 1)); // отфильтровать , оставить только не четные 

export default (a, b) => a + b; // return и ковычки сократили , сложили два числа и вернули их