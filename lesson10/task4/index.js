const getMaxAbsoluteNumber = arr => {
    if (!Array.isArray(arr) || arr.length < 1) {
        return null;
    }
    const absoluteValues = arr.map(num => {
        return Math.abs(num);
    });
    return Math.max(...absoluteValues);
};