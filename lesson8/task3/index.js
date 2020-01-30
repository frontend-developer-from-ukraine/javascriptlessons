const pickProps = (obj, arr) => {
    let resultObj = {};

    for (let i of arr) {
        for (let key in obj) {
            if (i == key) {
                resultObj[key] = obj[key];
            }
        }
    }
    return resultObj;
}

const arr = ['a', 17, 'Max'];
const result = pickProps(arr);
console.log(result);