const newQuoteButton = document.querySelector("#js-new-quote");
const answerButton = document.querySelector("#js-tweet");
const quoteText = document.querySelector("#js-quote-text");
const answerText = document.querySelector("#js-answer-text");

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

let currentAnswer = "";

newQuoteButton.addEventListener("click", getQuote);

answerButton.addEventListener("click", function () {
  answerText.textContent = currentAnswer;
});

function displayQuote(quote) {
  quoteText.textContent = quote;
}

function getQuote() {
  console.log("Button clicked");

  fetch(endpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch trivia.");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.question);
      displayQuote(data.question);
      currentAnswer = data.answer;
      answerText.textContent = "";
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error: Could not load trivia.");
    });
}

getQuote();