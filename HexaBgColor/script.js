function getRandomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}
let hexa= document.getElementById('hexa');
document.getElementById('btn').addEventListener('click', function () {
    let randomColor = getRandomColor();
    hexa.value = randomColor;
    document.body.style.backgroundColor = randomColor;
   
});