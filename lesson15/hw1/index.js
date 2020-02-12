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