let form1 = document.getElementById('form1');
let form2 = document.getElementById('form2');

form1.addEventListener("submit",(event)=>{
    event.preventDefault();
    let newTaskValue = document.getElementById('task').value;

    let newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.id = 'task' + (document.querySelectorAll('#check input[type="checkbox"]').length + 1); 

    let newLabel = document.createElement('label');
    newLabel.htmlFor = newCheckbox.id;
    newLabel.textContent = newTaskValue;

    document.getElementById('check').appendChild(newCheckbox);
    document.getElementById('check').appendChild(newLabel);
    let lineBreak = document.createElement('br');
    document.getElementById('check').appendChild(lineBreak);

    document.getElementById('task').value = '';
    
})