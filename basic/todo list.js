let val = prompt('Enter any thing');
let todo = ['walk', 'homework'];

while (val !== 'quit' && val !== 'q') {


    if (val === 'new') {
        const temp = prompt('Enter the task');
        todo.push(temp);
        console.log(`${temp} added to the list`);

    } else if (val === 'list') {

        console.log('****************');
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i} : ${todo[i]}`);
        }
        console.log('****************');


    } else if (val === 'delete') {
        let n = prompt("Enter the number");
        console.log(n);
        let temp  = todo.splice(n, 1);
        console.log(`${temp} deleted from the list`);

    }
    val = prompt('Enter the valid choice');
}

console.log("Byeee...");
