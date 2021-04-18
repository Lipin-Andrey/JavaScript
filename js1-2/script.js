// Задание 1 Дан код:

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2   ++a=1+1 c=2
d = b++; alert(d);           // 1   b++= + 1 , но возвращает старое значение d=1
c = (2 + ++a); alert(c);      // 5  в 3 строке а=уже 2,тут ++а ещё +1, т.е. a=3(Инкременты изменяют саму переменную)
d = (2 + b++); alert(d);      // 4  в строке 4 b=2,тут b++ ещё +1, но возвращается старое значение 2 - 2+2=4
alert(a);                    // 3   в 5 строке a = 3
alert(b);                    // 3   в 6 строке b = 2+1

//Почему код даёт именно такие результаты?

// Задание 2  Чему будет равен x в примере ниже?

var a = 2;
var x = 1 + (a *= 2);
alert(x);
// умножение с присвоением a *=2, т.е. a=a*2 2*2=4 1+4=5 Итог х=5.

/* Задание 3 Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.*/
var a = 10;
var b = 20;
if (a > 0 && b > 0) {
    с = a - b;
    alert(с);
}
else if (a < 0 && b < 0) {
    c = a * b;
    alert(c);
}
else if (a > 0 && b < 0 || a < 0 && b > 0) {
    c = a + b;
    alert(c);
}

// Задание 4 Присвоить переменной а значение в промежутке [0..5]. С помощью оператора switch организовать вывод чисел от a до 5.

a = +prompt('Ввести число 0-5:');
switch (a) {
    case 0:
        console.log(0);
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
        break;
}

/* Задание 5 Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.*/

function plus(a, b) {
    var c = a + b;
    return c;
}
alert(plus(10, 5));

function minus(a, b) {
    var c = a - b;
    return c;
}
alert(minus(15, 7));

function multiply(a, b) {
    c = a * b;
    return c;
}
alert(multiply(4, 5));

function division(a, b) {
    c = a / b;
    return c;
}
alert(division(18, 3));

/* Задание 6 Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения аргументов, operation — строка с названием операции. В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (применить switch).*/


function mathOperation(arg1, arg2, operation) {

    switch (operation) {
        case '+':
            plus = arg1 + arg2;
            return plus;

        case '-':
            minus = arg1 - arg2;
            return minus;
        case '*':
            multiply = arg1 * arg2;
            return multiply;

        case '/':
            division = arg1 / arg2;
            return division;

    }
}
console.log(mathOperation(10, 20, '+'));