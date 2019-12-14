function removeDuplicates(array) {
    let remove = [];

    for (let item of array) {
        if (!remove.includes(item)) {
            remove.push(item);
        }
    }

    return remove;
}