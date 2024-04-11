







const game = () => {
    let choices = ["rock", "paper", "scissors"];
    let click = document.getElementById("hello")
    // let player = "";

    click.addEventListener('click', (event) => {
        let player = prompt('Rock, Paper, Scissors ???').toLowerCase();
        let computer = choices[Math.floor(Math.random() * choices.length)]
        // console.log("C:" + computer + " " + "P:" + player)
        
        if(!/^[A-Za-z]+$/.test(player) || !player){
            alert("Text only, Please")
        }  
        else if(player === computer){
            console.log("You tied  "+ "C:" + computer + " " + "P:" + player)
        }
        else if(
            (player === 'rock' && computer === 'scissors') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'paper') 
        ) {
            console.log("You Win  "+ "C:" + computer + " " + "P:" + player)
        }
        else if(
            (computer === 'rock' && player === 'scissors') ||
            (computer === 'paper' && player === 'rock') ||
            (computer === 'scissors' && player === 'paper') 
        ) {
            console.log("You Lose  "+ "C:" + computer + " " + "P:" + player)
        }
        else {
            alert("rock, paper or scissors  Only")
        }
        
    })
   
}

game()
