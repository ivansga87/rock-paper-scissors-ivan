//1.- 

// console.log("Hello World!")


//2.-




function playGame() {



    // console.log("Enter your choice 'Rock', 'Paper' or 'Scissors':  ");


    //4.-



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

        //3.- 

        let getHumanChoice = Math.floor(Math.random() * 3);

        if (getHumanChoice === 1) {
            getHumanChoice = "Rock"
        }
        else if (getHumanChoice === 2) {
            getHumanChoice = "Paper"
        }
        else getHumanChoice = "Scissors"

        console.log(`You chose: ${getHumanChoice}`)

        const computerChoice = getComputerChoice.at(0).toUpperCase() + getComputerChoice.slice(1).toLowerCase()

        const humanChoice = getHumanChoice.at(0).toUpperCase() + getHumanChoice.slice(1).toLowerCase()

        let computerScore = 0;

        let humanScore = 0;


        const playRound = (computerChoice, humanChoice)
        if (computerChoice === humanChoice) {
            console.log("Its a Draw, go again?")



        }
        else if (computerChoice === "Rock" && humanChoice === "Paper") {
            humanScore = + 1
            console.log("You win! Paper beats Rock")
        }
        else if (computerChoice === "Rock" && humanChoice === "Scissors") {
            computerScore = + 1
            console.log("You lose! Rock beats Scissors")
        }
        else if (computerChoice === "Paper" && humanChoice == "Rock") {
            computerScore = + 1
            console.log("You lose! Paper beats Rock")
        }
        else if (computerChoice === "Paper" && humanChoice === "Scissors") {
            humanScore = + 1
            console.log("You win! Scissors beats Paper")
        }
        else if (computerChoice === "Scissors" && humanChoice === "Rock") {
            humanScore = + 1
            console.log("You win! Rock beats Scissors")
        }
        else if (computerChoice === "Scissors" && humanChoice === "Paper") {
            computerScore = + 1
            console.log("You lose! Scissors beats Paper")

        }


        console.log(`The score is: computer ${computerScore} | ${humanScore} You`)


    }

}



playGame()



