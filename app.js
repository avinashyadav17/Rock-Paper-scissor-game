let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = "blue";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userscore++;
        userscorepara.innerText = userscore;

        console.log("you win");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;

        console.log("you lose!");
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("userchoice =", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
        return;
    }

    let userWin = true;
    if (userChoice === "rock") {
        userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
        userWin = compChoice === "scissors" ? false : true;
    } else {
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
};

// Add event listeners to each choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});


/*let userscore=0;
let compscore=0;

const choices =document.querySelector(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const genCompChoice=() => {
    const options=["rock","paper","scissors"]
  const randIdx =Math.floor(Math.random()*3);
  return options[randIdx];
}

const drawGame=() => {
    console.log("game was draw");
    msg.innerText="Game Draw";
    msg.Style.nbackgroundColor="#blue";
}

const showWinner =(userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
userscorepara.innerText=userscore;

        console.log("you win");
        msg.innerText=`you win! your ${userChoice} beats ${computerChoice}`;
        msg.Style.nbackgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("you lose!")
        msg.innerText=`you lose!  ${userChoice} beats your${computerChoice}`;
        msg.Style.backgroundColor="red";
    }
    }



const playGame=(userChoice)=() => {
    console.log("userchoice=",userChoice);
const compChoice=genCompChoice();
console.log("comp choice=",compChoice);

if(userChoice===compChoice)
{
    drawGame();
}
let userwin=true;
if(userchoice==="rock"){
    userWin=compChoice ==="paper" ? false:true;
}
else if(userChoice==="paper"){
 userWin=compChoice ==="scissors" ? false:true;
}
else  
{
    userWin=compChoice==="rock" ? false:true;
} 
showWinner(userWin);
}

    //draw game

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
    });
});*/