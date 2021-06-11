
const button = document.getElementById('button');
const container = document.getElementsByClassName('container');

let text = document.getElementById('text');
let textBox = document.getElementById('text-box');

let openNextEx = () => {
    container[0].style.display = 'block';
};

let changeText = () => {
    let str = text.textContent;
    textBox.innerText = str.replace(/\B'|'\B/g, '"');
};
