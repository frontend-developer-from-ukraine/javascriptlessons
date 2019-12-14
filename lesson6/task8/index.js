function uniqueCount(array) {
    let long = 0;
    let a = array.filter((item, index) => index == array.indexOf(item) ? long++ : false);
    return long;
}