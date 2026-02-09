// let box = document.getElementById("box");
// let scoreDisplay = document.getElementById("score");
// let score = 0;

// // Get the sound
// let clickSound = document.getElementById("clickSound");

// // Move box to a random position
// function moveBox() {
//     let x = Math.random() * 550;
//     let y = Math.random() * 550;

//     box.style.left = x + "px";
//     box.style.top = y + "px";
// }

// // When the box is clicked
// box.addEventListener("click", function () {
//     score++;
//     scoreDisplay.textContent = score;

//     // Play sound
//     clickSound.currentTime = 0; // restart sound
//     clickSound.play();

//     moveBox();
// });

// // Start the game
// moveBox();

let box = document.getElementById("box");
let scoreDisplay = document.getElementById("score");
let score = 0;

let clickSound = document.getElementById("clickSound");

function getRandomColor() {
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
return `rgb(${r}, ${g}, ${b})`;
}
function moveBox() {

    let x = Math.random() * 550;
    let y = Math.random() *550;

    box.style.left = x + "px";
    box.style.top = y + "px";
}
    

    box.addEventListener("click", function () {
        score++;
        scoreDisplay.textContent = score;
            box.style.backgroundColor = getRandomColor();
        clickSound.currentTime = 0;
        clickSound.play();

        moveBox();
    });

    moveBox();