const colors = [
    '#FFAEBC',
    '#A0E7E5',
    '#B4F8C8',
    '#FBE7C6',
    '#CDB4DB',
];

let colorIndex;

const nextIndex = () => {
    if(colorIndex < 4) {
        colorIndex++
    } else {
        colorIndex = 0;
    }

    return colorIndex;
}
const button = document.querySelector('#btn');
const spanColor = document.querySelector('.color');

button.addEventListener('click', () => {
    spanColor.innerText = colors[nextIndex()];
});
