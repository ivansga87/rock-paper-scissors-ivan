//1.- 

// display.textContent("Hello World!")


//2.-

let display = document.getElementById("display")
display.textContent = "Make a selection to start game"

let score = document.getElementById("score")
score.textContent = ""

let humanChoice


let computerScore = 0;

let humanScore = 0;

let computerChoice



let rock = document.getElementById("rock")
rock.addEventListener("click", function (e) {
    humanChoice = e.target.id;
    console.log(humanChoice);
    playRound(computerChoice, humanChoice);
})
let paper = document.getElementById("paper")
paper.addEventListener("click", function (e) {
    humanChoice = e.target.id;
    console.log(humanChoice);
    playRound(computerChoice, humanChoice);
})
let scissors = document.getElementById("scissors")
scissors.addEventListener("click", function (e) {
    humanChoice = e.target.id;
    console.log(humanChoice);
    playRound(computerChoice, humanChoice);
})


function playRound(computerChoice, humanChoice) {

    let getComputerChoice = Math.floor(Math.random() * 3);

    if (getComputerChoice === 1) {
        getComputerChoice = "rock"
    }
    else if (getComputerChoice === 2) {
        getComputerChoice = "paper"
    }
    else getComputerChoice = "scissors"

    computerChoice = getComputerChoice
    console.log(computerChoice)

    if (computerChoice === humanChoice) {
        display.textContent = "Its a Draw!"


    }
    else if (computerChoice === "rock" && humanChoice === "paper") {
        humanScore += 1
        display.textContent = "You win! paper beats rock"
    }
    else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore += 1
        display.textContent = "You lose! rock beats scissors"
    }
    else if (computerChoice === "paper" && humanChoice == "rock") {
        computerScore += 1
        display.textContent = "You lose! paper beats rock"
    }
    else if (computerChoice === "paper" && humanChoice === "scissors") {
        humanScore += 1
        display.textContent = "You win! scissors beats paper"
    }
    else if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore += 1
        display.textContent = "You win! rock beats scissors"
    }
    else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore += 1
        display.textContent = "You lose! scissors beats paper"

    }

    score.textContent = `Current score
    Computer: ${computerScore}
    You: ${humanScore}`

    if (computerScore === 5 || humanScore === 5) {
        score.textContent = `Final Score
        Computer: ${computerScore}
        You: ${humanScore}
        To start over just make a selection again`;

        if (computerScore > humanScore) {
            display.textContent = `Game over... you lose!`
            computerScore = 0
            humanScore = 0
        }
        else if (computerScore < humanScore) {
            display.textContent = `Congratulations, you win!`
            computerScore = 0
            humanScore = 0
        }
    }
}
