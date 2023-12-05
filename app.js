let gameSeq=[];
let userSeq=[];

let btns=["red","yellow","purple","green"];
 
 let started=false;
 let level=0;

 let h2=document.querySelector("h2");

 document.addEventListener("keypress",function(){
    if(started==false){
    console.log("game started");
    started=true;
    levelUp();
    }
 });
 function gameFlash(btn){
        btn.classList.add("flash");
        setTimeout(function(){
            btn.classList.remove("flash");
        },250);
 }
 function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
 function levelUp(){
   userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
   //  console.log(randIdx);
   //  console.log(randColor);
   //  console.log(randBtn);
    gameFlash(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
 }

 function checkAns(idx){
   if(gameSeq[idx]===userSeq[idx]){
      if(gameSeq.length==userSeq.length){
         setTimeout(levelUp(),1000);
      }
   }else{
      h2.innerHTML=`game over!Your score was <b> ${level}</b> <br>press any key to start the game`;
      document.querySelector("body").style.backgroundColor="red";

      setTimeout(function(){
         document.querySelector("body").style.backgroundColor="white";
      },150);
      reset();
   }
 }

 function btnPress(){
      //   console.log(this);
      //   console.log("button was pressed");
        let btn=this;
        userFlash(btn);
        userColor=btn.getAttribute("id");
        userSeq.push(userColor);
        console.log(userSeq);
        checkAns(userSeq.length-1);
 }

 let allBtns=document.querySelectorAll(".btn");
 for(btn of allBtns){
    btn.addEventListener("click",btnPress);
 }


 function reset(){
   started=false;
   gameSeq=[];
   userSeq=[];
   level=0;
 }