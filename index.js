let point = 0;
let level = 1;
let maxStage = 10;


let playerName = prompt("Enter your Username");

console.log(`Welcome to Number Guessing Game ${playerName}`);

// For

for (let i = 2; i <= 10; i++){
    let numGuess = Math.floor(Math.random() * i) + 1;

    let userGuess = parseInt(prompt(`Enter number between 1 and ${i}`));

    if (userGuess === numGuess) {
        point += 1;
        level += 1;
        console.log('Correct!!! You got it right...');
        console.log(`Score: ${point} Level: ${level}`);
    } else if (userGuess !== numGuess) {
        point -= 1;
        level += 1;
        console.log('Wrong!!! Next time tries...');
        console.log(`Score: ${point} Level: ${level}`);

        if (point === 0) {
            console.log(`Game Over!!!!`);
            break;
        }

    } else{
        console.log(`Total score: ${point}`);
    }
}