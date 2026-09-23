const wordHeaderEl = document.querySelector(".wordHeader");
const userInputEl =document.querySelector(".input");

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

userInputEl.addEventListener('blur', () => {
    userInputEl.focus();
});

getRandomWord();
