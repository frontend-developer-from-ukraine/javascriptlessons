const reverseString = (str) => {
        if (typeof str !== "string") { // если передана не строка возвращаем null
            return null;
        }
        return str.split('').reverse().join('');
    }
    // 
'some text'.split('')['some', 'text']
    /*
    const reversed = array1.reverse();
    console.log('reversed:', reversed);
    // expected output: "reversed:" Array ["three", "two", "one"]

    /*
    const elements = ['Fire', 'Air', 'Water'];

    console.log(elements.join());
    // expected output: "Fire,Air,Water"

    console.log(elements.join(''));
    // expected output: "FireAirWater"

    console.log(elements.join('-'));
    // expected output: "Fire-Air-Water"
    */