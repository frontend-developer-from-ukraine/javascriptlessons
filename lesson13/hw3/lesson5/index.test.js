import { getSum, increaser, compareSums, findDivCount, squareArray, reverseArray, pickProps, getAdults } from './index';

it('should get sum', () => {
    const result = getSum(2, 10);
    expect(result).toEqual(30);
});

it('should get increase', () => {
    const result = increaser(20, 10);
    expect(result).toEqual(30);
});

it('should get if the first sum is bigger', () => {
    const result = compareSums(8, 7);
    expect(result).toEqual(true);
});

it('should get if the second sum is bigger', () => {
    const result = compareSums(4, 3);
    expect(result).toEqual(false);
});

it('should get number of 2', () => {
    const result = findDivCount(1, 20, 2);
    expect(result).toEqual(10);
});

it('should get if the string', () => {
    const result = squareArray('string');
    expect(result).toEqual(null);
});
it('should get array', () => {
    const result = squareArray([4]);
    expect(result).toEqual([16]);
});

it('should get if is not array', () => {
    const result = reverseArray(7, 8);
    expect(result).toEqual(null);
});


it('should get reverse', () => {
    const result = reverseArray([7, 8, 9]);
    expect(result).toEqual([9, 8, 7]);
});