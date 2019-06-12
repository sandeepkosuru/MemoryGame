/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
var starsFS=[...document.querySelectorAll('.rStar')];
var nodes=document.querySelector('.deck');
var sec = 0; var min = 0;
var count=0;
var starCount=0;
var matched=0;
var x;
var stars=document.querySelectorAll('.fa-star');
stars=[...stars];
var count1=document.querySelector('.moves');
var minu=document.querySelector('.min');
var seco=document.querySelector('.sec');
var allcards=[...document.querySelectorAll(' .card')];
var arrayMatch=[];
//the following loop is used to pick the cards
for( var i in allcards){
  allcards[i].addEventListener("click",displayCards);
  }


//The following functon is used to display the star rating on players performance based on number of clicks he/she performed
function displayCards() {
  count++;
  if (count>16&&count<20 ) {
    starCount=4;
        stars[0].classList.remove("fa-star");
    stars[0].classList.add("fa-star-o");
  }
  else if (count>20&&count<24) {
    starCount=3;
    stars[1].classList.remove("fa-star");
    stars[1].classList.add("fa-star-o");
      }
      else if (count>24&&count<30) {
        starCount=2;
        stars[2].classList.remove("fa-star");
        stars[2].classList.add("fa-star-o");
              }
              else if (count>30&&count<35) {
                starCount=1;
                stars[3].classList.remove("fa-star");
                stars[3].classList.add("fa-star-o");
              }
              else
                {
                  if(count<16)
                  starCount=5;
                }


//this condtion is used to start the timer
  if (count==1) {
    my_timer();

  }
count1.innerHTML=count;
  this.classList.add("open","show","disable");
  arrayMatch.push(this);
matchedCards();
}

//the following code is used to check the card match
function matchedCards() {
  setTimeout(function () {
  if (arrayMatch.length==2) {
  if (arrayMatch[0].firstElementChild.className===arrayMatch[1].firstElementChild.className)
  {
    matched++;
    //the following code works when all cards are matched
    if(matched==8){
      document.querySelector(".topframe").style.visibility="visible";
      nodes.style.visibility="hidden";
      //this statement is used to stop the timer
      clearInterval(x);
      //gives the complition minutes
      document.querySelector('.timeMin').innerHTML=min;
      //gives the complition seconds
      document.querySelector('.timeSec').innerHTML=sec;
        //gives the final number of moves
      document.querySelector('.finalMoves').innerHTML=count;
//the following loop is used to display the final rating

      for(var i=0;i<starCount;i++) {
        starsFS[i].classList.remove("rStar");
        starsFS[i].classList.add("fa","fa-star");
            }
    }
    //the following code is used to match the cards
      arrayMatch.map(i=>{
      i.classList.remove("open","show");
      i.classList.add("match");
    });
  }
  else {
      arrayMatch.map(i=>{
        i.classList.remove("open","show","disable");
      });
  }
  arrayMatch=[];
}
}, 200);
}
//the following code is to count the time
my_timer=function(){
x=setInterval(function stopwatch() {
   sec++;
   if (sec == 60) {
     sec = 0; min = min + 1;
   }
   else
    {
       min = min;
      }
        if (min == 60) {
           min = 0; }
           if (sec<=9) {
             sec = "0" + sec;
            }

          minu.innerHTML=((min<=9) ? "0" + min : min) ;
          seco.innerHTML= sec;
        },1000);
      }

//the following function is to Shuffle cards
var shuffleCards=[...shuffle(allcards)];
for(i in shuffleCards){
nodes.appendChild(shuffleCards[i]);
}
//the following function to restart the game
function reset(){
  location.reload();
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
