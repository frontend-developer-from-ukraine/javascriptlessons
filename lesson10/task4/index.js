const getMaxAbsolutNumber = arr => {
    let max = -Infinity;

    arr.forEach(num => {
        if (Math.abs(num) > max) {
            max = Math.abs(num);
        }
    });
    return max;
}