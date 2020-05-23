window.addEventListener('load',init);
//global

//Available levels
const levels={
  easy:5,
  medium:3,
  hard:2,
}

// to cahnge levels 
const currentLevel =levels.medium;

let  time= currentLevel;
let score = 0;
//game going or over
let isPlaying;


//DOM elements 
const wordInput=document.querySelector('#word-input');
const currentWord=document.querySelector('#current-word');
const scoreDisplay=document.querySelector('#score');
const timeDisplay=document.querySelector('#time');
const message=document.querySelector('#message');
const seconds=document.querySelector('#seconds');

const words =[

    'gate',
  'river',
  'lucky',
  'iit bombay',
  'generate',
  'chess',
  'magnus carlsen',
  'stubborn',
  'cocktail',
  'runaway',
  'udit kumar',
  'developer',
  'establishment',
  'govil',
  'javascript',
  'nutrition',
  'revolver',
  'iit delhi',
  'determination',
  'dream',
  'coding',
  'web development',
  'steve jobs',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition',
  'invincible',
  'impeccable',
  'gorgeous',
  'incredible',
  'marvellous',
  

];
//Initialize Game 
function init(){
  // show seconds of current level
  seconds.innerHTML=currentLevel;
showWord(words);
//start matching word input
wordInput.addEventListener('input',startMatch);
//Output Random word
setInterval(countdown,1000);
// Check game status
setInterval(checkStatus,50);

}

// start match 
function startMatch(){
  if (matchWords()){
    isPlaying=true;
    //1 more than currentLevel
    time=currentLevel+1; // buffer/load delay
    showWord(words);
    wordInput.value= '';
    score++;
    //once you reach here to reload the functionality its own
    window.addEventListener('load',init);
  }
// for resetting the score
  if (score===-1){
    scoreDisplay.innerHTML=0;
  }
  else{
  scoreDisplay.innerHTML=score;
  }
}

// matching the showing text to writing text 
function matchWords(){
  if (wordInput.value===currentWord.innerHTML){
    message.innerHTML="Correct!!!";
    return true;
  }
  else{
    message.innerHTML=" ";
    return false;
  }
}

function showWord(words){
  //generating index 0 to 29
  const randIndex = Math.floor(Math.random()*words.length);
  currentWord.innerHTML=words[randIndex];
}

//Countdown Timer 
function countdown(){
  // make sure timer is not run out
  if (time>0){
    time--;
  }
  else if(time===0){
    isPlaying=false;
  }
  timeDisplay.innerHTML=time;
}

//checking status 
function checkStatus(){
  if(!isPlaying && time===0){
    message.innerHTML="Game Over !!!";
    //for resetting the score
    score = -1;
    
  }
}