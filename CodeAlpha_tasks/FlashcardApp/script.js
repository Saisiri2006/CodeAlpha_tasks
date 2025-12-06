let flashcards = [
    { question: "What is HTML?", answer: "A markup language for creating web pages" },
    { question: "What is CSS?", answer: "Used to style and layout web pages" }
];

let currentIndex = 0;
let showingAnswer = false;

function displayCard() {
    let card = flashcards[currentIndex];
    document.getElementById("cardText").innerText = showingAnswer ? card.answer : card.question;
}

document.getElementById("toggleBtn").addEventListener("click", function () {
    showingAnswer = !showingAnswer;
    displayCard();
});

document.getElementById("nextBtn").addEventListener("click", function () {
    if (currentIndex < flashcards.length - 1) currentIndex++;
    showingAnswer = false;
    displayCard();
});

document.getElementById("prevBtn").addEventListener("click", function () {
    if (currentIndex > 0) currentIndex--;
    showingAnswer = false;
    displayCard();
});

document.getElementById("addBtn").addEventListener("click", function () {
    let q = document.getElementById("questionInput").value;
    let a = document.getElementById("answerInput").value;
    if (q && a) {
        flashcards.push({ question: q, answer: a });
        currentIndex = flashcards.length - 1;
        showingAnswer = false;
        displayCard();
    }
});

document.getElementById("deleteBtn").addEventListener("click", function () {
    if (flashcards.length > 1) {
        flashcards.splice(currentIndex, 1);
        currentIndex = Math.max(0, currentIndex - 1);
        showingAnswer = false;
        displayCard();
    } else {
        alert("Minimum 1 card is required!");
    }
});

displayCard();
