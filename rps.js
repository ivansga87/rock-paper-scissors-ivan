//1.- 

// console.log("Hello World!")


//2.-

let computerScore = 0;

let humanScore = 0;


function playGame() {

    for (let i = 0; i < 5; i++) {

        let getComputerChoice = Math.floor(Math.random() * 3);

        if (getComputerChoice === 1) {
            getComputerChoice = "Rock"
        }
        else if (getComputerChoice === 2) {
            getComputerChoice = "Paper"
        }
        else getComputerChoice = "Scissors"

        console.log(`Computer chose: ${getComputerChoice}`);

        let getHumanChoice = "rock"
        // prompt("Choose: 'Rock', 'Paper', 'Scissors'")


        console.log(`You chose: ${getHumanChoice}`)

        const computerChoice = getComputerChoice.at(0).toUpperCase() + getComputerChoice.slice(1).toLowerCase()

        const humanChoice = getHumanChoice.at(0).toUpperCase() + getHumanChoice.slice(1).toLowerCase()

        playRound(computerChoice, humanChoice)



    }
    
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log("Its a Draw!")


    }
    else if (computerChoice === "Rock" && humanChoice === "Paper") {
        humanScore += 1
        console.log("You win! Paper beats Rock")
    }
    else if (computerChoice === "Rock" && humanChoice === "Scissors") {
        computerScore += 1
        console.log("You lose! Rock beats Scissors")
    }
    else if (computerChoice === "Paper" && humanChoice == "Rock") {
        computerScore += 1
        console.log("You lose! Paper beats Rock")
    }
    else if (computerChoice === "Paper" && humanChoice === "Scissors") {
        humanScore += 1
        console.log("You win! Scissors beats Paper")
    }
    else if (computerChoice === "Scissors" && humanChoice === "Rock") {
        humanScore += 1
        console.log("You win! Rock beats Scissors")
    }
    else if (computerChoice === "Scissors" && humanChoice === "Paper") {
        computerScore += 1
        console.log("You lose! Scissors beats Paper")

    }


    console.log(`The score is: computer: ${computerScore} | You: ${humanScore} `)


}



function finalScore() {
    if (computerScore === humanScore) {
        console.log(`It's a tie!, the final score is: Computer: ${computerScore} | You: ${humanScore}`)
    }
    else if (computerScore > humanScore) {
        console.log(`You lose!, the final score is: Computer: ${computerScore} | You: ${humanScore}`)
    }
    else console.log(`You win!, the final score is: Computer: ${computerScore} | You: ${humanScore}`)


}


playGame()

finalScore()