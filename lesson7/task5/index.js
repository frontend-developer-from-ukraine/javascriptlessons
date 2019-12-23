function squareArray(arr) {
    if (!Array.isArray(arr)) {
        return;
    }
    return arr.map(num * num);
}