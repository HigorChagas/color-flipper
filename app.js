const colors = [
    '#FFAEBC',
    '#A0E7E5',
    '#B4F8C8',
    '#FBE7C6',
    '#CDB4DB',
];

const button = document.querySelector('#btn');
const copyButton = document.querySelector('#copy');
const spanColor = document.querySelector('.color');
const container = document.querySelector('.container');

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
    const randomNumber = getRandomNumber();
    spanColor.textContent = colors[randomNumber];
    container.style.backgroundColor = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
 
