const getSpecialNumbers = numbers => {
    let specialNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 === 0) {
            specialNumbers.push(numbers[i]);
        }
    }
    return specialNumbers;
};
const arr = [1, 2, 3, 4, 5, 6];
console.log(getSpecialNumbers(arr));