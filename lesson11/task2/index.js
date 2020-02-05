const sortContacts = (arr, boolen) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    const result = arr.sort((a, b) => {
        if (boolen === true || boolen === undefined) {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });
    return result;
};

/* 1. стрелочная функция 
2. два аргумента массив , и бул значение 
3. если передан не массив вернуть null
4. объявить метод sort 
5. Логический оператор И (ещет первое true)
5. если булевое тру то перебираем массив 
6. Вернуть результат