const splitText = (text, len = 10) => {
    if (typeof text !== 'string') return null;

    const strArr = [];
    let startPosition = 0;

    while (true) {
        let chunk = text.substr(startPosition, len);
        if (chunk.length === 0) {
            break;
        }
        strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
        startPosition += len;
    }
    return strArr.join('\n');
};


/*берем текст и делим на куски и закидываем в массив "asdfgh", 4 => ["asd", "fgh" ] => сделаем первый символ большими буквами ['Asd', 'Fgh'] = > каждый елемент склею с помощью спец символа 'Asd/nFgh'
"asdfgh", 4 => ["asd", "fgh" ] => ['Asd', 'Fgh'] = > 'Asd/nFgh' 
1.	const splitText = (text, len) => { // текст принимаем на вход , длинну 3 принимаем на вход
2.	    const strArr = []; // все строки записываем в массив
3.	    let startPosition = 0; // переменная отсчета
4.	
5.	    while (true) {  // используем бесконечный цикл , который будет идти по строке и отрезать определенный кусок
6.	        let chunk = text.substr(startPosition, len); // на каждой итерации отрезаем кусок , метод .substr() отрезает кусок
7.	        if (chunk.length === 0) { // если длина ноль то заканчиваем считывать строку
8.	            break; // директивой обрываем цикл
9.	        }
10.	        strArr.push(chunk[0].toUpperCase() + chunk.slice(1)); // на каждом шаге в массив добавлять кусочек этим методом .toUpperCase() делаем каждую букву большой , методом .slice() - добавим, таким образом пушаем в массив элименты
11.	        startPosition += len; // прибавляем к стартовой пизиции + длину
12.	    }
13.	    return strArr.join('\n'); // вернуть массив и склеим с разделителем
14.	};
15.	
16.	
17.	console.log(splitText('asdfgh', 3));