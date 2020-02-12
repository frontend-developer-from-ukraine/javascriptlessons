export function createCalculator() {
    let num = 0;

    function add(sum) {
        return num += sum;
    };

    function decrease(sum) {
        return num -= sum;
    };

    function reset(sum) {
        return num = 0;
    };

    function getMemo(sum) {
        return num;
    };
    return {
        add,
        decrease,
        reset,
        getMemo,
    }
}

const number = createCalculator();
const number1 = createCalculator();
console.log(number.add(3))
console.log(number.decrease(3))
console.log(number.reset(3))
console.log(number.getMemo(3))
console.log(number1.add(3))
console.log(number1.reset(3))
console.log(number1.getMemo(3))