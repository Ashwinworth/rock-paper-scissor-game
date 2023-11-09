
const score = JSON.parse(localStorage.getItem('score')) ;

updatescore();

function playGame(playerMove){
 const computerMove=pickCompterMove();
 let result = '';

 if (playerMove==='scissors'){

 if (computerMove === 'rock') {
   result = 'You lose.';
 } else if (computerMove === 'paper') {
   result = 'You win.';
 } else if (computerMove === 'scissors') {
   result = 'Tie.';
 }

} 
   else if(playerMove==='paper'){

   if (computerMove === 'rock') {
         result = 'You win.';
   } else if (computerMove === 'paper') {
         result = 'Tie.';
   } else if (computerMove === 'scissors') {
         result = 'You lose.';
   }

   } 
   else if(playerMove==='rock'){

   if (computerMove === 'rock') {
     result = 'Tie.';
   } else if (computerMove === 'paper') {
     result = 'You lose.';
   } else if (computerMove === 'scissors') {
     result = 'You win.';
   }
   }
   if(result==='You win.'){
     score.wins=score.wins +1;
   }
   else if(result==='You lose.'){
     score.looses=score.looses+1;
   }
   else if(result==='Tie.'){
     score.ties=score.ties+1;
   }

   localStorage.setItem('score',JSON.stringify(score));

    updatescore();

    document.querySelector('.js-result')
    .innerHTML=result;

    document.querySelector('.js-moves')
    .innerHTML=`you
<img src="images/${playerMove}-emoji.png"
class="move-icon" >
<img src="images/${computerMove}-emoji.png" 
 class="move-icon">
Computer`;

}

function updatescore(){
 document.querySelector('.js-score')
 .innerHTML=`wins:${score.wins}, looses:${score.looses}, ties:${score.ties}`;
}
function pickCompterMove(){

 const randomNumber = Math.random();
 let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1 / 3) {
 computerMove = 'rock';
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
 computerMove = 'paper';
} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
 computerMove = 'scissors';
}
return computerMove;

}