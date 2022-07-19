//console.log("Hello world!")

        /* Instruction 3. Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!*/

        //function computerPlay('Rock','Paper''Scissors'){
         
            

        //}

//let randomHandTest=['rock','paper','scissors']
       // Math.random(randomHandTest)


     //  randomly return computer's hand of rock, paper, or scissors


     //tried to do a computerPlayTest Object - cant figure this out yet
      /* let computerPlayTest = {
        rock: 'Rock',
        paper: 'Paper',
        scissors: 'Scissors'
      }*/



        /* Instruction 3. Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!*/

      //declare variable that is equal to an array of strings for 'rock','paper','scissors'
      let rockPaperScissorsElements = ['rock','paper','scissors']
      //use apply method to pass the rockPaperScissorsElements array to a function called computerPlayTest
      //computerPlayTest.apply(this, rockPaperScissorsElements) - this works with the consolelogging but isnt needed
      //the function  works with the apply method
      function computerPlayTest(){

         //for(let i=0; i<rockPaperScissorsElements.length; i++) -- removed this loop since it caused the function to consolelog iteratively... i only needed to consolelog one element at a time
         
         return rockPaperScissorsElements[Math.floor(Math.random() * rockPaperScissorsElements.length)] // this consolelogs a random element of the array --- formula: array[math.floor(math.random()*array.length
          
      }


/* Instruction 4. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
      Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
     Instruction 5.  Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results:

*/
function playRound(playerSelection, computerSelection) {
// your code here!

/* scissors>paper*/  if(playerSelection =='scissors'&&computerSelection=='paper'){

  return `You Win! + ${playerSelection} beats ${computerSelection}`  
 }/* paper>rock*/ else if(playerSelection =='paper'&&computerSelection=='rock'){

  return `You Win! + ${playerSelection} beats ${computerSelection}` 
 } /* rock>scissors*/ else if(playerSelection =='rock'&&computerSelection=='scissors'){
  `You Win! + ${computerSelection} beats ${playerSelection}`  
 } /* tie if playerSelection and computerSelection are equal */ else if(playerSelection == computerSelection){
  return `There's a Tie! + You both selected + ${playerSelection}`
 }/* the else for any gameplay where computerSelection beats player selection*/ else{
  return `You Lose! +  ${computerSelection} beats ${playerSelection}`
 }
}



//this is the code provideded in the odin project's expmaple
//const playerSelection = "rock"
//const computerSelection = computerPlay()
//console.log(playRound(playerSelection, computerSelection)

function game(){
  //for (let i=1;i<5;i++){
    
   //game requires case insensitivity for player input
//prompt user for input by initializing playerSelection with a value of the prompt "Choose one: rock, paper, scissors"
//.toLowercase method allows the prompt to convert any variation of the words to lowercase, so rock==rOck
let playerSelection = prompt("Choose one: rock, paper, or scissors").toLowerCase()


//run a whle loop for while playerSelection is any words other than rock, paper, or scissors
//should check for not lowercase and still allow it
  /*while (
    playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors"
  ) 
   {playerSelection = prompt("Error accepting input: Try again from the choices given: rock, paper, or scissors").toLowerCase()}
   */

playRound(playerSelection,computerPlayTest())
} 
/*Instruction 6. Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

a. Remember loops? This is a great opportunity to use one to play those five rounds

b. At this point you should be using console.log() to display the results of each round and the winner at the end.

c. Use prompt() to get input from the user. Read the docs here if you need to.

d. Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.

e. Feel free to create more “helper” functions if you think it would be useful.

*/


// a function called computerPlay randomly returns "Rock", "Paper", or "Scissors"
// a function called playRound() plays a single round of rock paper scissors
// playRound() takes two parameters - playerSelection and computerSelection
// playRound() returns a string that declares the winner of the round
// the playerSelection parameter should be case-insensitive to account for variations
// functon playRound() plays a single round of rock, paper, scissors
// write a new function called game()
// insert playRound() inside game() and loop playRound() to play a 5 round game
// Keep score and report a winner and loser at the end

   /*
   Rock Paper Scissors rules according to wikipedia
        scissors>paper bc scissors cut paper
       paper>rock bc paper covers rock
         rock>scissors bc rock breaks scissors
  /*




      ---------------------
function playRound(playerSelection, computerSelection) {
  // your code here!
  
}






     // }

//       var names = [ 'Mehvish', 'John', 'Henry', 'Thomas'];
// displayName.apply(this, names);

// function displayName(){
//  	for(var i=0; i<names.length; i++){
//  		console.log(names[i]);
//     }
// }








         /* 
         Use Math.random() function to get the random number between(0-1, 1 exclusive).
Multiply it by the array length to get the numbers between(0-arrayLength).
Use Math.floor() to get the index ranging from(0 to arrayLength-1).
         
         */
 //console.log(computerPlayTest.length*Math.random(computerPlayTest)) - returned decimal instead of index or element


//console.log(rockPaperScissorsElements[Math.floor(Math.random() * rockPaperScissorsElements.length)])
     // }


// let rockOrPaperOrScissors = 0;
// for (let key in a) {
//     keysCount++;
// }
// console.log(keysCount) // 2

//let randomHandOfPlay = Object.getOwnPropertyNames(randomHandTest)
//       console.log(randomHandOfPlay)
        // var hands = ["JavaScript", "Python", "C++", "Java", "Lua"];

        // const randomHand= Math.floor(Math.random() * hands.length);
        // console.log(randomHand[''])


        // truncate the Array to 3 elements
        // langs.length = 3
        
        // Output: [ 'JavaScript', 'Python', 'C++' ]
        // console.log(langs)
        
        //extend the Array to length 6
       // langs.length = 6
        
       // Output: [ 'JavaScript', 'Python', 'C++', <3 empty items> ]
        //console.log(langs)

