import getSum, { getSquaredArray, getOddNumbers } from './calculator' // импорт функций с папки 


it('should get squared numbers', () => { // что делает делает проверка 
    const result = getSquaredArray([1, 2, 3]);
    expect(result).toEqual([1, 4, 9]); // ожидаем(), равно([])
});
it('should keep odd numbers', () => { // что делает делает проверка 
    const result = getOddNumbers([1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 3, 5]); // ожидаем(), равно([])
});
it('should get sum of numbers', () => { // что делает делает проверка 
    const result = getSum(8, 4);
    expect(result).toEqual(12); // ожидаем(), равно([])
});