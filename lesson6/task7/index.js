function sortAsc(array) {
    for (let a = 0; a < array.length; a++) {
        for (let b = 0; b < array.length; b++) {
            if (array[a] < array[b]) {
                let current = array[a];
                array[a] = array[b];
                array[b] = current;
            }
        }
    }
    return array;
}

function sortDesc(array) {
    for (let a = 0; a < array.length; a++) {
        for (let b = 0; b < array.length; b++) {
            if (array[a] > array[b]) {
                let current = array[a];
                array[a] = array[b];
                array[b] = current;
            }
        }
    }
    return array;
}