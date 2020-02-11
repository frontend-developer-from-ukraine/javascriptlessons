import { getSum, increaser, compareSums, findDivCount } from './index';

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