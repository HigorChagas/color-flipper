const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const button = document.querySelector('#btn');
const spanColor = document.querySelector('.color');
const container = document.querySelector('.container');
const copyButton = document.querySelector('#copy')

copyButton.addEventListener('click', () => {
    const range = document.createRange();
    range.selectNode(spanColor);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    alert('Color copied!');
});

button.addEventListener('click', () => {
    let hexColor = '#';
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    spanColor.textContent = hexColor;
    container.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}