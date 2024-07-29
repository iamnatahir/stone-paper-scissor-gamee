let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
let userscore=document.querySelector("#user-score");
let compscore=document.querySelector("#comp-score");
const mesg=document.querySelector("#message");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
    });
});
const drawgame=()=>{
   mesg.innerText="Game was Draw.Play again.";
   mesg.style.backgroundColor="rgb(4, 4, 85)";
};
const showWinner=(userWin,userchoice,comp)=>{
    if(userWin){
       userScore++;
       userscore.innerText=userScore;
        mesg.innerText=`You win ! Your ${userchoice} beats ${comp}`;
        mesg.style.backgroundColor="green";
    }else{
       compScore++;
       compscore.innerText=compScore;
        mesg.innerText=`You lose. ${comp} beats ${userchoice}`;
        mesg.style.backgroundColor="red";
    }

}
const playGame=(userchoice)=>{
    console.log("userchoice =",userchoice);
    //generate computer choice
    const comp=compchoice();
    console.log("comp choice =",comp);
    if(userchoice==comp){
        drawgame();
    }else{
        let userWin=true;
        if(userchoice=="rock"){
            userWin=comp==="paper"?false:true;
        }else if(userchoice=="paper"){
            userWin=comp==="scissor"?false:true;
        }else{
            userWin=comp==="rock"?false:true;
        }
        showWinner(userWin,userchoice,comp);
    }
};
const compchoice=()=>{
    //rock,papper,sciisor
    let arr=["rock","paper","scissor"];
    const randIndex=Math.floor(Math.random()*3);
    return arr[randIndex];
};

