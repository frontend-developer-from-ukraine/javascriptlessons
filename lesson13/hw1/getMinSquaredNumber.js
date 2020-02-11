export const getMinSquaredNumber = arr => {
    if (arr.length == 0 || !Array.isArray(arr)) { // если пустой массив ИЛИ не массив, то возврат null
        return null;
    }
    arr = arr.map(num => Math.abs(num)); // с помощью .map() - пройтись по масиву и выбрать максимальное число 
    const min = Math.min(...arr); // Math.min() - объект Math - поиск минимального числа , используем spread оператор для перебора массива
    return min * min; // вернуть квадрат , квадрат это число * на самого себя 
};

/* Алгоритм:
1. стрелочная функция
2. если пустой массив , тоесть == 0 ИЛИ не массив, то return nul
3. Поиск минимального числа и умножить на самого себя 
*/