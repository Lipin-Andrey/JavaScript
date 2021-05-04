var storeState = {
    availableProducts: [
        { price: 50, name: 'bread', count: 10 },
        { price: 50, name: 'milk', count: 20 },
        { price: 200, name: 'oil', count: 30 },
        { price: 100, name: 'tea', count: 35 },

    ],
    basket: [],

}


function drawAvailableProducts() {
    var allProductsDiv = document.getElementById('availableProducts');

    storeState.availableProducts.forEach(product => {
        var productDiv = document.createElement('div');

        var nameP = document.createElement('p');
        nameP.innerHTML = product.name;
        productDiv.appendChild(nameP);

        var priceP = document.createElement('p');
        priceP.innerHTML = product.price;
        productDiv.appendChild(priceP);

        var buyButton = document.createElement('button');
        buyButton.innerHTML = 'Купить';
        buyButton.onclick = () => {
            storeState.basket.push(product);
            drawBasket();
            plus();
        }
        productDiv.append(buyButton);
        allProductsDiv.append(productDiv);
    })
}
function drawBasket() {
    var basketDiv = document.getElementById('basket');
    basketDiv.innerHTML = '';
    storeState.basket.forEach(item => {
        var itemP = document.createElement('p');
        itemP.innerHTML = item.name;
        basketDiv.append(itemP);
    })
}

function plus() {
    var amount = document.getElementById('basket1');
    amount.innerHTML = '';
    storeState.basket.forEach(item => {
        var itemW = document.createElement('p');
        itemW.innerHTML = 'сумма ' + item.price;
        amount.append(itemW);
    })
}

function init() {
    drawAvailableProducts();
}

init();




