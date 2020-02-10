const splitString = (text, number) => {

    if (typeof text !== 'string') { // если не строка вернуть null
        return null;
    }

    const strArr = []; // все строки записываем в массив
    let startPosition = 0; // переменная отсчета

    while (true) { // используем бесконечный цикл , который будет идти по строке и отрезать определенный кусок
        let chunk = text.substr(startPosition, number); // на каждой итерации отрезаем кусок , метод .substr() отрезает кусок
        if (chunk.length === 0) { // если длина ноль то заканчиваем считывать строку
            break; // директивой обрываем цикл
        }

        startPosition += number; // складываем 
        strArr.push(chunk); // пушаем в массив 
    }

    let lastElement = strArr[strArr.length - 1]; // берем последний элимент массива

    lastElement += '.'.repeat(number - lastElement.length); // последний элемент складываем 
    strArr[strArr.length - 1] = lastElement; // выводим посл элм

    return strArr; // вернуть массив
}