import { getMinSquaredNumber } from './getMinSquaredNumber';

it('result', () => {
    const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
    expect(result).toEqual(4);
})

it('string', () => {
    const result = getMinSquaredNumber("jsdgoof")
    expect(result).toEqual(null);
})



it('empty', () => {
    const result = getMinSquaredNumber({});
    expect(result).toEqual(null);
})