const countOccurrences = (str, serch) => {
    if (serch === 0) {
        return null;
    }
    return str.split(serch).length - 1;
}