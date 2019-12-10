let m = 10;
let n = 5;

let result = 0;

for (let a = m; a <= n; a++) {

    if (a % 2 === 0 && a % 4 !== 0) {
        result += a;
    } else if (i % 3 === 0) {
        result -= a;
    } else if (a % 4 === 0) {
        result *= a;
    }

    if (a % 5 === 0) {
        console.log(m);
    }
}