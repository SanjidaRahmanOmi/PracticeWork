function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
document.getElementById('btn').addEventListener('click', function () {
    let randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
});