const countOccurrences = (str, serch) => {
    if (serch === "") { // если пустая строка то null
        return null;
    }
    return str.split(serch).length - 1; // метод работы метода 'some text' .split() // ['some', 'text'];
}