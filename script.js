const wordHeaderEl = document.querySelector(".wordHeader");
const userInputEl = document.querySelector(".input");
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


function updateWord() {
    const currentPosition = userInputEl.selectionStart;

    userCursor = userInputEl.value.split("");
    userCursor.splice(currentPosition, 0, "|");
    userOutputEl.textContent = ">" + userCursor.join("")
}

userInputEl.addEventListener('keyup', updateWord);
userInputEl.addEventListener('click', updateWord); //might remove
userInputEl.addEventListener('focus', updateWord); 


function compareWord(){
    userInputArray = userInputEl.value.split("");

    

}


getRandomWord();