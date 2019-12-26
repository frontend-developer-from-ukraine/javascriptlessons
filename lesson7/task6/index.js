function reverseArray(arr) {
    if (Array.isArray(arr)) {
        return null;
    }
    let reversed = [...arr].reverse();
    return reversed;
}