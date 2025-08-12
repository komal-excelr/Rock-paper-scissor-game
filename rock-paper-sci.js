let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");

const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock","paper", "scissors"]
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
    //rock papre scissors
}

const drawGame = () =>{
    console.log("Game was Draw");
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "#081b31";
}
 
const showWinner = (userWin , userChoice , compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText =  compScore;
        console.log("You Lose");
        msg.innerText = `You Lose ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor="red";
    }
};

const playGame = (userChoice) =>{
    //generate computer choice
    const compChoice = genCompChoice();

    if(userChoice===compChoice){
        //draw 
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper scissor
            userWin = compChoice === "paper" ? false : true;
        }
         else if(userChoice === "paper"){
            //rock scissor
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            //paper rock
        userWin = compChoice === "rock" ? false : true;

        }
        showWinner(userWin , userChoice, compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was click",userChoice);
        playGame(userChoice);
    });
});