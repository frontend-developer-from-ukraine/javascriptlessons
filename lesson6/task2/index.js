function getSum(array) {

    if (!Array(array)) {
        return null;
    }

    for (let a = 0; a < array.length; a++) {
        sum += array[a];
    }
    return sum;
}