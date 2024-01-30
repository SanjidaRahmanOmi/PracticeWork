function getRandomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}
let hexa= document.getElementById('hexa');
document.getElementById('btn').addEventListener('click', (event)=> {
    event.preventDefault();
    let randomColor = getRandomColor();
    hexa.value = randomColor;
    document.body.style.backgroundColor = randomColor;
   
});
document.getElementById('copy').addEventListener('click', (event)=> {
    event.preventDefault();
    navigator.clipboard.writeText(hexa.value);
    
     let div = document.createElement('div');
     div.innerText = hexa.value+ " copied";
     div.className = 'msg';
     document.body.appendChild(div);
});

