let section = document.querySelector('#container');



for (let i = 10001; i <= 10099; i++) {
    let img = document.createElement('img');
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    section.appendChild(img);

}