const user = {
    name: "John Doe",
    key: 17,
    interest: 'football',
};

const concatProps = obj => {
    const arr = [];

    for (let key in obj) {
        arr.push(obj[key]);
    }

    return arr;
};

console.log(concatProps(user));