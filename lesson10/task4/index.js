function getMaxAbsoluteNumber = arr => {
    if (!Array.isArray(arr) || arr.length < 1) {
        return null;
    }
    const absoluteValues = arr.map(num => {
        return Math.abs(num);
    });
    return Math.max(...absoluteValues);
};

console.log(getMaxAbsoluteNumber([34, 55.3, 23.4, 99.33]));