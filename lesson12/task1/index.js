// Улучшили 

const calc = expression => {
    const [a, operator, b] = expression.split(' '); // сделали const [a, operator, b]  - деструктуризацию  // методом .split(' ') мы '1 + 2'  сделаи ["1", "+", "2"]
    let result;

    switch (operator) {
        case '+':
            result = Number(a) + Number(b);
            break; // конструкцию switch() case - надо остановить при помощи оператора break
        case '-':
            result = a - b;
            break;
    }

    return `${expression} = ${result}`; // улучшили читаемость воспользоваться ${}

};

const [a, b, c] = [1, 2, 3]

console.log(calc('6 - 9')) // 12 - потому что происходит сложение строк, для этого надо плюс поставить перед return +a[0] + +a[2]; или функция  Number(a[0]) + Number(a[2]);