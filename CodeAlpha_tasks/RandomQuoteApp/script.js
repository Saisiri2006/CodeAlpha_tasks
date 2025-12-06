const quotes = [
    { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
    { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { quote: "Stay hungry, stay foolish.", author: "Steve Jobs" }
];

function showRandomQuote() {
    const random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote-text").innerText = quotes[random].quote;
    document.getElementById("quote-author").innerText = "— " + quotes[random].author;
}

// Show one on load
showRandomQuote();

// Show new one on button click
document.getElementById("newQuoteBtn")
        .addEventListener("click", showRandomQuote);
