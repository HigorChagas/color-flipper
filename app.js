const colors = [
    '#FFAEBC',
    '#A0E7E5',
    '#B4F8C8',
    '#FBE7C6',
    '#CDB4DB',
];

const button = document.querySelector('#btn');
const spanColor = document.querySelector('.color');
const container = document.querySelector('.container');


button.addEventListener('click', () => {
    const randomNumber = getRandomNumber();
    spanColor.textContent = colors[randomNumber];
    container.style.backgroundColor = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
 
