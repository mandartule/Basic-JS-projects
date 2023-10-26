let form = document.querySelector('#form');
let input = document.querySelector('#input');
let ul = document.querySelector('#type')

form.addEventListener('submit',function(e){
    e.preventDefault();
    let li = document.createElement('LI');
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = "";
})