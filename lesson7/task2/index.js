// unsorted array => sorted array 
const sortArray = numbers => {
    numbers.sort((a, b) => a - b);
    return numbers;
};
const arr = [a, b];
console.log(sortArray(arr));