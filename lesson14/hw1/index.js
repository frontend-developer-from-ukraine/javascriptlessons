let num = 0;

export function add(sum) {
    return num += sum;
};

export function decrease(sum) {
    return num -= sum;
};

export function reset(sum) {
    return num = 0;
};

export function getMemo(sum) {
    return num;
};