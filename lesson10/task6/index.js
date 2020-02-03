const getRandomNumbers = (length, start, end) => {
    const numbers = (end - start < 1) && Math.ceil(end) === Math.ceil(start);

    if (start > end || numbers) return null;

    return Array(length)
        .map(i => Math.random());
}