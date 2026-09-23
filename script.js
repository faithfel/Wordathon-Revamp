const wordHeaderEl = document.querySelector(".wordHeader");
const userInputEl =document.querySelector(".input");
const userOutputEl = document.querySelector(".userOutput");

async function getRandomWord() {

    const response = await fetch('api/wordapi.json');
    const data = await response.json();

    const randomIndex = Math.floor(Math.random() * data.length);
    const randomItem = data[randomIndex];

    wordHeaderEl.textContent = randomItem;
    
    randomWord = randomItem.split(''); 
    console.log(randomWord);
    
    return randomItem;
}

userInputEl.addEventListener('input', (event) => {
    userOutputEl.textContent = ">" + event.target.value;

});

getRandomWord();





  function updateCursorPosition() {
    const currentPosition = userInputEl.selectionStart;
    console.log("cursor position: "+ currentPosition);
  }

  
  userInputEl.addEventListener('keyup', updateCursorPosition);
  userInputEl.addEventListener('click', updateCursorPosition); //might remove
  userInputEl.addEventListener('focus', updateCursorPosition); 