import { calc } from './calculator';

it('should +', () => {
    const result = calc('2 + 2');
    expect(result).toEqual('2 + 2 = 4');
});
it('should -', () => {
    const result = calc('2 - 2');
    expect(result).toEqual('2 - 2 = 0');
});

it('should *', () => {
    const result = calc('2 * 2');
    expect(result).toEqual('2 * 2 = 4');
});

it('should /', () => {
    const result = calc('2 / 2');
    expect(result).toEqual('2 / 2 = 1');
});


it('should work if isn not a string', () => {
    const result = calc([]);
    expect(result).toEqual(null);
})

/*
Из чего состоит Юнит Тест:
1.	// состоит из функции: it()
2.	
3.	it('здесь пишем что именно проверяет наш тест', () => {  // функции нужно передать два аргумента: 1. сообщение 2. функция которая будет что то проверять
4.	       expect(17).toEqual(17); // в () мы передаем что мы хотим проверить expect(17) - я ожидаю что 17 будет . РАВНО toEqual(17); 
5.	}); 
*/