const pickProps = (obj, arr) => {
    let obj = {};

    for (let i of arr) {
        for (let key in obj) {
            if (i == key) {
                obj[key] = obj[key];
            }
        }
    }
    return obj;
}