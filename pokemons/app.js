let section = document.querySelector('#container');



for (let i = 10001; i <= 10099; i++) {
    let div = document.createElement('div');
    let span = document.createElement('span');
    span.innerText = `#${i-10000}`;
    let img = document.createElement('img');
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    div.appendChild(img);
    div.appendChild(span);
    div.classList.add('pokemon');
   
    section.appendChild(div);

}