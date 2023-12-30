let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg"); 
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

choices.forEach((choice)=>{
        choice.addEventListener("click",()=>{
            const userChoice=choice.getAttribute("id")
           
         playGame(userChoice);
        });
});

const playGame=(userChoice)=>{
       console.log("user's Choice is ",userChoice);
       //generate computer choice
       const compChoice = genCompChoice();
       console.log("computer's choice is ",compChoice);
       if(userChoice===compChoice){
          drawgame();
       }
       else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if (userChoice === "paper") {
            userWin=compChoice ==="scissors" ? false : true ;
        }
        else{
            userWin=compChoice==="scissors"?false:true;
       }
       showWinner(userWin,userChoice,compChoice);
    }

};
const drawgame=()=>{
    console.log("game was draw.");
    msg.innerText="Your game is Draw. Play Again";
    msg.style.backgroundColor="#081b31";
}
const genCompChoice=()=>{
    let options=["rock","paper","scissors"];
    let randIdx=Math.floor(Math.random()*options.length);
    return options[randIdx];
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){

        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`Hurray!!! You Won, ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`Oops!!! You Lose, ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
