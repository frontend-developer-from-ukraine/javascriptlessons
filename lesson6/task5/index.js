function squareArray(arr) {
    let squaredArr = [];

    if (!Array.isArray(arr)) {
        return null;
    }

    for (let a = 0; a < arr; a++) {
        squaredArr(arr[a] * arr[a);
        }

        return squaredArr;
    }

    console.log(squareArray([2, 3, 4, 5]));