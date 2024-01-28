function getRandomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}
document.getElementById('btn').addEventListener('click', function () {
    let randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
});