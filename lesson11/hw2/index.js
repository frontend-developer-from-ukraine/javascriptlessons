const countOccurrences = (str, serch) => {
    if (serch === "") {
        return null;
    }
    return str.split(serch).length - 1;
}