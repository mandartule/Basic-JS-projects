let button = document.querySelector('button');
let h1  = document.querySelector('h1');


button.addEventListener('click',()=>{
    let r = Math.floor(Math.random()*255)+1;
    let g = Math.floor(Math.random()*255)+1;
    let b = Math.floor(Math.random()*255)+1;
    let color = `rgb(${r},${g},${b})`;

    document.body.style.backgroundColor = color;
    h1.innerText = color;
    if(r<= 10 || g <= 10 || b <=10){
        h1.style.color = 'white';
    }else{
        h1.style.color = 'black';
    }
})