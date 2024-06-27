let userscore=0;
let compscore=0;
let userWin=true;
const userscorepara=document.querySelector("#userscore");
const compscorepara=document.querySelector("#compscore");

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const genCompChoice=()=>{
    const options=["rock", "paper", "scissor"]
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
msg.innerText="Game Draw";
msg.style.backgroundColor="rgb(17, 17, 47)";
}

const showWinner=(userWin,userChoice,compChoice)=>{

    if(userWin){
        userscore++;
        userscorepara.innerText=userscore;
    msg.innerText=`You Win!, ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
   msg.innerText=`You Lose!, ${compChoice} beats ${userChoice}`;
   msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
const compChoice=genCompChoice();

if(userChoice===compChoice){
 drawGame();
}
else{
   
    if(userChoice==="rock"){
        userWin=compChoice==="paper" ? false:true;
    }
    else if(userChoice==="paper"){
        userWin=compChoice==="scissor" ? false:true;
    }
    else{
     userWin=compChoice==="rock" ? false:true;
    }
    showWinner(userWin,userChoice,compChoice);
}
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})

