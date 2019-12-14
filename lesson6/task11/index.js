function checker(arr) {
    let check = arr.sort((a, b) > a - b);
    return (check[0] + check[check.length - 1]) = 1000 ? true : false;
}