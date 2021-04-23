/* Задание 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100*/
/*Для всех i от 1 до 10 {
    проверить, делится ли число i на какое-либо из чисел до него
    если делится, то это i не подходит, берём следующее
    если не делится, то i - простое число
  }
  }
let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...
    for (let j = 2; j < i; j++) { // проверить, делится ли число..
        if (i % j == 0) continue nextPrime; // не подходит, берём следующее
    }
    console.log(i); // простое число
}*/
let n = 0;
while (n < 100) {
    let check = true;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            check = false;
            break;
        }
    }
    if (check) console.log(n);
    n++;
}
/* Задание 2. Задачи:Организовать такой массив для хранения товаров в корзине;
Организовать функцию countBasketPrice, которая будет считать стоимость корзины.*/

let basketProduct = ['bread', 'milk', 'oil', 'tea', 'beer', 'sausage', 'dumplings'];
let priceProduct = [50, 50, 200, 100, 150, 500, 300];

function countBasketPrice() {
    let amount = 0;
    for (let x = 0; x < priceProduct.length; x++) {
        amount += priceProduct[x];
    }
    return amount;
}
console.log('Цена ' + countBasketPrice());

/* Задание 3. *Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:for(...){// здесь пусто}*/

for (let i = 0; i < 10; console.log(i++)) { }

/* Задание 4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов*/
let pyramid = 'x';
for (let i = 0; i < 20; i++) {
    console.log(pyramid);
    pyramid += 'x';
}
