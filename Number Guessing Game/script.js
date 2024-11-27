const randomNum = Math.floor(Math.random() * 50) + 1;

let guessCount = 6;

function verifyNumber() {
  guessCount--;
  let userInput = document.getElementById("userInput").value;
  let suggestion = document.getElementById("suggestion");
  let result = document.getElementById("result");
  let guessCountalert = document.getElementById("guessCountalert");

  console.log(userInput);

  let apUserInput = parseInt(userInput);

  if (apUserInput === randomNum) {
    result.textContent = "you winn!!";
    result.style.color = "green";
    
    guessCountalert.textContent = " ";
    guessCountalert.style.color = "white";

    suggestion.textContent = "Reloading in 3 seconds...";
    suggestion.style.color = "green";
    guessCountalert.textContent = " ";
    setTimeout(() => {
      location.reload();
    }, 3000);
    
  } else {
    if (apUserInput < randomNum) {
      suggestion.textContent = "Guess Higher";
      suggestion.style.color = "black";
    } else {
      suggestion.textContent = "Guess Lower";
      suggestion.style.color = "black";
    }
    if (guessCount >= 0) {
      guessCountalert.textContent =
        "Only " + guessCount + " chances remaining.";
      guessCountalert.style.color = "red";
    }

    if (guessCount === 0) {
      result.textContent = "you lost";
      result.style.color = "red";
      document.getElementById("userInput").disabled = true;

      suggestion.textContent = "Reloading in 3 seconds...";
      suggestion.style.color = "red";
      guessCountalert.textContent = " ";
      setTimeout(() => {
        location.reload();
      }, 3000);

    }
  }
}

function reset() {
  location.reload();
}
