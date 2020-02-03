const getRandomNumbers = (length, start, end) => {
    const numbers = (end - start < 1) && Math.ceil(end) == Math.ceil(start);

    if (start > end || numbers) return null;

    return Array(length).map(num => Math.random());
}

// аглорит 
//1. создаем стрелочную функцию с тремя аргументами 
//2. переменная конец минус начало меньше 1 И округляем конец равно округляем начало 
//3. если начало больше конца ИЛИ переменной, позваращем null
//4. возвращаем массив , случайное число