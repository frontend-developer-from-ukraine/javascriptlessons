function checker(arr) {
    let check = arr.sort((i, a) > i - a);
    (check[0] + check[check.length - 1]) > 1000 ? true : false;
}