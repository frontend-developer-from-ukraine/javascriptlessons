const splitString = (text, number) => {

    if (typeof text !== 'string') {
        return null;
    }

    const strArr = [];
    let startPosition = 0;

    while (true) {
        let chunk = text.substr(startPosition, number);
        if (chunk.length === 0) {
            break;
        }

        startPosition += number;
        strArr.push(chunk);
    }

    let lastElement = strArr[strArr.length - 1];

    lastElement += '.'.repeat(number - lastElement.length);
    strArr[strArr.length - 1] = lastElement;

    return strArr;
}