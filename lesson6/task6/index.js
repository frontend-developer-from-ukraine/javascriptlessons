function reverseArray(arr) {
    if (!Array(arr)) {
        return null;
    }

    let reversedArr = [];
    for (let i = 0; i < arr.length; i++) {
        reversedArr(arr[i]);
    }

    return reversedArr;
}