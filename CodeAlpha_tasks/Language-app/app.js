let flashcards = [
    { word: "Bonjour", meaning: "Hello (French)" },
    { word: "Gracias", meaning: "Thank you (Spanish)" },
    { word: "Hallo", meaning: "Hello (German)" }
];

let index = 0;

function showCard() {
    document.getElementById("word").textContent = flashcards[index].word;
    document.getElementById("meaning").textContent = flashcards[index].meaning;
}

document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % flashcards.length;
    showCard();
});

showCard();
