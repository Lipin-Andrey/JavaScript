class GoodItem {
    constructor(title = 'Product', price = 'No price', img = 'img/no-image.jpg') {
        this.title = title;
        this.price = price;
        this.img = img;
    }
    render() {
        return `<div class="goods-item">
                <div class="goods-info">
                  <img src="${this.img}" alt="${this.title}">
                  <h3>${this.title}</h3>
                  <p>${this.price}</p>
                </div>
                <button class='addClick'>Добавить</button>
              </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [{
            title: 'Shirt',
            price: 150,
            img: 'img/Shirt.jpg'
        },
        {
            title: 'Socks',
            price: 50,
            img: 'img/Socks.jpg'
        },
        {
            title: 'Jacket',
            price: 350,
            img: 'img/Jacket.jpg'
        },
        {
            title: 'Shoes',
            price: 250,
            img: 'img/Shoes.jpg'
        },
        {
            price: 50,
            img: 'img/Socks.jpg'
        },
        {
            title: 'Cap',
            img: 'img/Cap.jpg'
        },
        {
            title: 'Shoes',
            price: 250,
        },
        {},
        { img: 'img/Cap.jpg' },
        ]
    }


    render() {
        let listHtml = '';
        this.goods.forEach((good) => {
            const goodItem = new GoodItem(good.title, good.price, good.img);
            listHtml += goodItem.render();
        })
        document.querySelector('.goods-list').innerHTML = listHtml;
    }


    calcAllGoods() {
        let totalPrice = 0;
        this.goods.forEach((good) => {
            if (good.price !== undefined) {
                totalPrice += good.price;
                console.log(good.price);
            }
        });
        let totalGoodsAnswer = "Все товары на сумму : " + totalPrice;
        document.querySelector('.goods-total').innerHTML = totalGoodsAnswer;
        console.log(totalPrice);
    }
}


class BasketItem {
    constructor(title, price, img, link) {
        this.title = title;
        this.price = price;
        this.img = img;
        this.link = link; // ссылка на страницу товара
    }
    render() {

    }
}

class Basket {
    constructor() {
        // массив с добавленными товарами
        this.addGoods = [];

    }
    // Добавление товара в корзину 
    addToBasket() { }

    // Удаление товара из корзины 
    deleteFromBasket() { }

    // При  наличии товара в корзине активирует кнопку "Оформить заказ"
    placeAnOrder() { }

}

const list = new GoodsList();
list.fetchGoods();

window.onload = () => {
    list.render();
    list.calcAllGoods();
};
