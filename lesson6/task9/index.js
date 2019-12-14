function removeDuplicates(array) {
    let array = [];

    for (let item of array) {
        if (array.includes(item)) {
            array.push(item);
        }
    }

    return array;
}