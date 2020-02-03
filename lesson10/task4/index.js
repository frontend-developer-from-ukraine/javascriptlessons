const getMaxAbsoluteNumber = arr => {
    if (!Array.isArray(arr) || arr.length < 1) {
        return null;
    }
    const absoluteValues = arr.map(num => {
        return Math.abs(num);
    });
    return Math.max(...absoluteValues);
};

// 1. создать функцию
// 2. цикл if если не массив или пустой массив (пройтись по длине) то возврат null
// 3. перебрать массив методом 
// 4. найти самое большое число + использовать spread оператор