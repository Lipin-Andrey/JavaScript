// Задание 1
function init() {
    let isBlack = true;
    let gameBoard = document.querySelector('.board');
    i = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let tile = document.createElement('div');
            tile.classList.add(isBlack ? 'blackTile' : 'whiteTile');
            gameBoard.appendChild(tile);
            isBlack = !isBlack;
        }
        isBlack = !isBlack;
    }
}
init();

// Задание 2

const basket = {
    products: [
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
        for (let key in this.products) {
            const elem = this.products[key];
            amount += elem.count * elem.price;
        }
        this.amount = amount;
        return amount;
    }

}
console.log(basket.products);
console.log(basket.sumBasket());


function basketSumBasket1() {
    document.querySelector(".basket1").innerHTML = 'В корзине товаров = ' + basket.products.length;
}

function basketSumBasket() {
    document.querySelector(".basket").innerHTML = 'Стоимость корзины = ' + basket.sumBasket();
}

basketSumBasket1();
basketSumBasket();

