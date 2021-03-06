let obj = {};
export const getOwnProps = obj => {
    let propArr = [];
    for (let prop in obj) {
        if (typeof obj[prop] !== 'function' && obj.hasOwnProperty(prop)) {
            propArr.push(prop);
        }
    }
    return propArr;
};