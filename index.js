// phew… not a lot going on here. Please add some code!
console.clear();

// Bookkmark button holen:
const bookmarkButton = document.querySelector("[data-js=bookmark]");

// Answer-Button holen:
const answerButton = document.querySelector("[data-js=answerButton]");

//Answer holen
const cardAnswer = document.querySelector("[data-js=cardAnswer]");

// Bookmark button changes color when clicked - switching colors is always possible
bookmarkButton.addEventListener("click", () => {
  console.log("test2");
  bookmarkButton.classList.toggle("bookmark--active");
});

// When Answer Button is clicked, the answer is displayed
// When the button is clicked again, answer is hidden again
// When answer is shown, button says "hide again"
// When user clicks on "hide again", content is hidden

answerButton.addEventListener("click", () => {
  cardAnswer.classList.toggle("card__answer--active");

  // Button-Text ändern
  if (cardAnswer.classList.contains("card__answer--active")) {
    answerButton.textContent = "Hide answer";
  } else {
    answerButton.textContent = "Show answer";
  }
});
