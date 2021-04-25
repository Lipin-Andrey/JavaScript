/*Задание 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.*/

let max = 999;
let digit = {
    number: +prompt('Введите число от 0 до 999'),
    hundreds: 0,
    tens: 0,
    units: 0
};
if (digit.number <= 9) {
    digit.units = digit.number;
} else if (digit.number <= 999) {
    digit.units = Math.floor(digit.number % 10);
    digit.tens = Math.floor(digit.number / 10 % 10);
    digit.hundreds = Math.floor(digit.number / 100 % 10);
} else {
    digit.number = 0;
    console.log('Нужно меньше или равно 999');
}
console.log(digit);

/*Задание 2. Продолжить работу с интернет-магазином:В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу. */

const basket = {
    goods: [
        { price: 50, name: 'bread', count: 10 },
        { price: 50, name: 'milk', count: 20 },
        { price: 200, name: 'oil', count: 30 },
        { price: 100, name: 'tea', count: 35 },
        { price: 150, name: 'beer', count: 40 },
        { price: 500, name: 'sausage', count: 45 },
        { price: 300, name: 'dumplings', count: 51 },
    ],
    sumBasket: function () {
        let amount = 0;
        for (let key in this.goods) {
            const elem = this.goods[key];
            amount += elem.count * elem.price;
        }
        this.amount = amount;
        return amount;
    }
}
console.log(basket.sumBasket());
