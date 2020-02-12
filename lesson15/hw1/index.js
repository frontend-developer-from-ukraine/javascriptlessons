export function createCalculator() {
    let num = 0;

    function add(sum) {
        return num += sum;
    };

    function decrease(sum) {
        return num -= sum;
    };

    function reset() {
        return sum = 0;
    };

    function getMemo() {
        return sum;
    };
    return {
        add,
        decrease,
        reset,
        getMemo,
    }
}