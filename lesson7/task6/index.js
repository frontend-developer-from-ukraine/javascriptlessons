function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let reverse = [arr].reverse();
    return reverse;
}