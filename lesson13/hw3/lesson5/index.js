export function getSum(b, c) {
    let sum = 0;
    for (let i = b; i <= c; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}

export function increaser(a, index) {
    return a > index ? a + index : a;
}

function compareSums(a, b, c, d) {
    let firstSum = sum(a, b);
    let secondSum = sum(c, d);
    return firstSum > secondSum ? true : false;
}

export function findDivCount(a, b, n) {
    let counter = 0;
    for (let i = a; i <= b; i++) {
        if (i % n === 0) {
            counter++;
        }
    }
    return counter;
}