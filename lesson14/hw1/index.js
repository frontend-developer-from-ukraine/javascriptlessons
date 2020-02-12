export default function createMemory() {
    let number = 0;

    function add(num) {
        number += num;
    };

    function decrease(num) {
        number -= num;
    };

    function reset(num) {
        number = 0;
    };

    function getMemo(num) {
        number;
    };
    return {
        add,
        decrease,
        reset,
        getMemo

    }
};