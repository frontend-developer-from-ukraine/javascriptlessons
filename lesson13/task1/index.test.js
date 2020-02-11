/*
Из чего состоит Юнит Тест:
1.	// состоит из функции: it()
2.	
3.	it('здесь пишем что именно проверяет наш тест', () => {  // функции нужно передать два аргумента: 1. сообщение 2. функция которая будет что то проверять
4.	       expect(17).toEqual(17); // в () мы передаем что мы хотим проверить expect(17) - я ожидаю что 17 будет . РАВНО toEqual(17); 
5.	}); 
*/


it('17 и в Африке 17', () => {
    expect(17).toEqual(17);
});
it('18 это вам не 17', () => {
    expect(18).not.toEqual(17);
});

const getEvenNumbers = numbers =>
    numbers.filter(num => (num % 2 === 0));
it('should get only even numbers from array', () => {
    const result = getEvenNumbers([1, 2, 3, 4]);
    expect(result).toEqual([2, 4]);
});

/*
ТЕПЕРЬ С ПОМОЩЬЮ jest НАДО ЗАПУСТИТЬ ФАЙЛ:
1. в терминале: pwd - где мы
2. jest lesson13/task1
3. npm init
*/