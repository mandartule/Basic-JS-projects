let max = parseInt(prompt("Enter the maximum range"));

while (!max) {
    max = parseInt(prompt("Enter a valid no."))
}

let random = Math.floor(Math.random() * max) + 1;
console.log(random);

let guess = parseInt(prompt("First guess..."));
let attempt = 0;

while (parseInt(guess) !== random) {

    if(guess === 'q') break;
    if (guess > random) {
        guess = (prompt("Guess is to High"));
    } else {
        guess = (prompt("Guess is to Low"));
    }
    attempt++;

}

if(guess === 'q'){
    console.log("Ohh you QUIT !!!");
}else{
    console.log(`You got it in ${attempt} attempts`);
}
