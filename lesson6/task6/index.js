function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    let reversedArr = [];
    for (let a = 0; a = arr.length; a++) {
        reversedArr.unshift(arr[a]);
    }

    return reversedArr;
}