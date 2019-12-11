function sum(from, to) {
    return from + to;
}

function compareSums(a, b, c, d) {

    let secondSum = sum(c, d);
    return firstSum > secondSum ? true : false;
}