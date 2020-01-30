const getAduls = obj =>
    let above = {};

for (let key in obj) {
    if (obj[key] >= 18) {
        above18[key] = obj[key];
    }
}