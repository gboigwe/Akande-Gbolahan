let form = document.getElementById('javascript_form');



mail_submit.addEventListener('click', function () {
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
var message = document.getElementById('message');
const mail_submit = document.getElementById('submit');
    let msg = message;

    // Validate
    if (msg === ''){
        alert('What the');
    }
    else{
        console.log('please');
    }

    // // Check if won
    // if(msg === winningNum){
    //     //Game over - work


    //     gameOver(true, `${winningNum} is correct, YOU WON!`, `green`);
    // }else {
    //     //Wrong number
    //     guessesLeft -=1;

    //     if(guessesLeft=== 0){
    //         //Game Over -lost

    //         gameOver(false, `GAME OVER, YOU LOST!, The correct number is ${winningNum}`, `red`);
    //     }else {
    //         //Game continues - answer wrong

    //         //Change Border color
    //         guessInput.style.borderColor = 'red';

    //         //Disable input
    //         guessInput.value = '';

    //         //Tell User Its The Wrong Number
    //         setMessage(`${guess} is not correct, ${guessesLeft} guessleft`,'red')
    //     }
    // }
});
function setMessage(msgs, color) {
    message.style.color = color;
    message.textContent = msgs;
}