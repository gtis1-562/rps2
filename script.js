const rockBtn = document.getElementById("rock-btn")
const paperBtn = document.getElementById("paper-btn")
const scissorsBtn = document.getElementById("scissors-btn")

let choiceResult = document.getElementById("my-choice");
let result = document.getElementById("result");


rockBtn.addEventListener('click', () => {
    game('rock')
})
paperBtn.addEventListener('click', () => {
    game('paper')
})
scissorsBtn.addEventListener('click', () => {
    game('scissors')
})


const game = (player) => {
    let choices = ["rock", "paper", "scissors"];
        let computer = choices[Math.floor(Math.random() * choices.length)]
        
        if(player === computer){
            console.log("C:" + computer + " " + "P:" + player)
            result.innerText = "Tied";
            choiceResult.innerText = " Player:  "+ player + "  Computer: "+ computer;
        }
        else if(
            (player === 'rock' && computer === 'scissors') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'paper') 
        ) {
            console.log("C:" + computer + " " + "P:" + player)
            result.innerText = "You Win";
            choiceResult.innerText = " Player:  "+ player + "  Computer: "+ computer;
        }
        else 
        if(
            (computer === 'rock' && player === 'scissors') ||
            (computer === 'paper' && player === 'rock') ||
            (computer === 'scissors' && player === 'paper') 
        ) {
            console.log("C:" + computer + " " + "P:" + player)
            result.innerText = "You Lose";
            choiceResult.innerText = " Player:  "+ player + "  Computer: "+ computer;
        }
       
   
}

game()
