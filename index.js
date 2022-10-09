const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreEl.innerHTML = `score: ${score}`;

const questionEl = document.getElementById("question");
questionEl.innerHTML = `What is ${num1} multiply by ${num2}?`;

const fromEl = document.getElementById("form");
const inputEl = document.getElementById("input");

const correctAns = num1 * num2;

fromEl.addEventListener("submit", () => {
  const userAns = +inputEl.value;

  if (userAns == correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
