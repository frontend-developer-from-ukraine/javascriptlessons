let obj = {};
export function getOwnProps(obj) {
    let propArr = [];
    for (let prop in obj) {
        if (typeof obj[prop] === 'function')) {
        propArr.push(prop);
    }
}
return propArr;
};