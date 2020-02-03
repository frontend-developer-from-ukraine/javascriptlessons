function getMaxAbsoluteNumber = arr => {
    if (!Array.isArray(arr) || arr.length < 1) {
        return null;
    }

    const absoluteValues = arr
        .map(num => Math.abs(num));

    return Math.max(...absoluteValues);


};