function checker(arr) {
    let check = arr.sort((i, c) => i - c);
    return (check[0] + check[check.length - 1]) > 1000 ? true : false;
}