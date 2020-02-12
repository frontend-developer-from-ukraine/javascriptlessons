export function createCalculator() {
    let num = 0;

    function add(sum) {
        return num += sum;
    };

    function decrease(sum) {
        return num -= sum;
    };

    function reset(sum) {
        return sum = 0;
    };

    function getMemo(sum) {
        return sum;
    };
    return {
        add,
        decrease,
        reset,
        getMemo,
    }
}