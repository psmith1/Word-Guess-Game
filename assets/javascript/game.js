    
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    var guess; //user guess
    var letters = []; //correctly guessed letters
    var wrongLetters = []; //incorrectly guessed letters

    var lives = 10; //counts users lives


    var wordList = ["roanoke", "broadway", "mcgee", "college", "ward", "grand", "westport", "quindaro", "quivira"];

    //randomly chooses a number, then chooses a random word from wordList
    var word = wordList[Math.floor(Math.random() * wordList.length)];

    //choosen word is replaced with
    function start() {
        for (i = 0; i < word.length; i++) {
            letters[i] = "__";
        }

    document.getElementById("answer").innerHTML = letters.join(" ");
    console.log(word);
    }


    function checkLetter() {
        document.onkeyup = function(event) {
            guess = event.key.toLowerCase();
            // boolean check if letter was found
            var found = false;
            for (i = 0; i < word.length; i++) {
                if (guess === word[i]) {
                    letters[i] = guess;
                    document.getElementById("answer").innerHTML = letters.join(" ");
                    found = true;
                  }
            }
    //now all letters have been checked, was any found
    if (found) return; //if yes return, you get another guess

    
    //wrong, lets also see if 
    //it's not already logged, if not add it
    //you could also then use  wrongLetters.length
    //for working out if gueses area all used up.
    if (wrongLetters.indexOf(guess) < 0) {
      document.getElementById("scoreCounter").innerHTML = ("Guesses: " + lives);
      if (lives === 0){
        // document.getElementById("scoreCounter").innerHTML = ("Guesses: " + lives);
        alert ("Game Over")
    // when lives = 0, alert user they lost and call reset game
      

      } else {
        wrongLetters.push(guess);
        document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
        lives--;

      
      }
      
      
    }
    
  }
}


start();
checkLetter();
