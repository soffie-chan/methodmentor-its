import { pickNextQuestion, thetaToMastery, getTheta, renderQuestion,processAnswer,updateProgressBar} from "./mastery.js";
import { getQuestionSet } from "./questions.js";
import {
  submitAnswer
} from "./mastery.js";

export function startTutor() {
  const saved = JSON.parse(localStorage.getItem("tutorProgress") || "{}");
  let selectedMode =
  localStorage.getItem("selectedMode") || null;
  const selectScreen = document.getElementById("section-select");
const intro = document.getElementById("section-intro");

const mapBtn = document.getElementById("select-map");
const filterBtn = document.getElementById("select-filter");
const pablo = document.getElementById("pablo");

if (pablo) {
  pablo.onclick = () => {
    location.reload();
  };
}

mapBtn.onclick = () => {
  selectedMode = "map";
localStorage.setItem("selectedMode", "map");
  startLesson();
};

filterBtn.onclick = () => {
  selectedMode = "filter";
localStorage.setItem("selectedMode", "filter");
  startLesson();
};

if (saved.theta !== undefined) {
  import("./mastery.js").then(mod => {
    mod.__setTheta(saved.theta);  //change this for
mod.__setDifficulty2Correct(saved.difficulty2Correct || 0);

    updateProgressBar(thetaToMastery(getTheta()));
  });
} else {
  updateProgressBar(thetaToMastery(getTheta()));
}

function loadTextbook(mode) {
  const textbook = document.getElementById("textbookmap");

  if (mode === "map") {
    textbook.innerHTML = `
      <div id="textbookmap">
    <p>.map() lets you transform every item in an array and return a new array. Think of it as “take each value, change it, and keep the structure.”</p>
    <p>To use map, you need a list of items that you would like to change. Then, think of what command you want to apply to it.</p>
    <p>If you wanted to double every number in a list called "Nums", for example,</p>
    <p style="font-size: 20px; color: blueviolet;">const newList = Nums.map((x:number):number => x*2)</p>
    <p>Here, <u>const newList</u> is the list you want to store everything in. <u>x</u> is the parameter and x:number means that the type of x is a number. We mention this because the list Nums is filled with numbers, and since we're iterating through it, our input values are numbers!</p>
    <p>(x:number):number is basically saying that the output we expect should also be a number. The => operator says, "Everything after me is a part of the function." So it's like {} as you know it.</p>
    <p>Lastly, the command! Since we want to multiply every number, we use x*2.</p>
    <p>Why not try it yourself?</p>
  </div>
    `;
  }

  if (mode === "filter") {
    textbook.innerHTML = `
      <p>.filter() keeps only items that pass a condition...</p>
      <p>Example: nums.filter(x => x > 5)</p>
    `;
  }
}

function startLesson() {
  document.getElementById("section-select").style.display = "none";
  document.getElementById("section-intro").style.display = "block";

  loadTextbook(selectedMode);
}

updateProgressBar(thetaToMastery(getTheta()));
  const quiz = document.getElementById("section-quiz");

  const startQuizBtn = document.getElementById("start-quiz-btn");
  const submitBtn = document.getElementById("submit-btn");
  const nextBtn = document.getElementById("next-btn");
  const feedback = document.getElementById("feedback");

  let currentQuestion = null;
  let attemptCount = 0;

function loadNextQuestion() {
  const mastery = thetaToMastery(getTheta());
  const pool = getQuestionSet(selectedMode, mastery);
  console.log("POOL:", pool);
console.log("QUESTION:", currentQuestion);
  console.log("RAW theta:", getTheta());
console.log("MASTERY:", mastery);


  if (!pool || pool.length === 0) {
    console.error("No questions in pool!", mastery);
    return;
  }

  currentQuestion = pickNextQuestion(getTheta(), pool);

  if (!currentQuestion) {
    console.error("pickNextQuestion returned nothing");
    return;
  }

  console.log("Loaded question:", currentQuestion);

  renderQuestion(currentQuestion);

  attemptCount = 0;

  submitBtn.style.display = "inline-block";
  nextBtn.style.display = "none";

  feedback.textContent = "Coo!";
}

startQuizBtn.onclick = () => {
    intro.style.display = "none";
    quiz.style.display = "block";

    loadNextQuestion();
    updateProgressBar(thetaToMastery(getTheta()));
  };

submitBtn.onclick = () => {
  if (!currentQuestion) return;

  updateProgressBar(thetaToMastery(getTheta()));
  submitAnswer(currentQuestion);

  let userAnswer;

  if (currentQuestion.type === "coding") {
    const el = document.getElementById("code-input");
    if (!el) return;

    userAnswer = el.value.trim();
  } else {
    const el = document.getElementById("blank-input");
    if (!el) return;

    userAnswer = el.value.trim();
  }

  if (!userAnswer) {
    feedback.textContent = "Please enter a value! I mean... coo.";
    return;
  }

  const normalize = s => s.replace(/\s+/g, "").toLowerCase();

  const isCorrect =
    normalize(userAnswer) === normalize(currentQuestion.answer);

  if (isCorrect) {
    submitBtn.style.display = "none";
    nextBtn.style.display = "inline-block";
    return;
  }

  attemptCount++;
  if (!isCorrect && currentQuestion.feedbackChecks) {

  for (const check of currentQuestion.feedbackChecks) {

    if (check.test(userCode)) {
      feedback.textContent = check.message;
      return;
    }
  }
}

  feedback.textContent = currentQuestion.hint || "Try again.";

  if (attemptCount >= (currentQuestion.maxAttempts ?? 2)) {
    feedback.innerHTML =
      "Oops!<br>" + (currentQuestion.explanation || "Coo.");

    nextBtn.style.display = "inline-block";
  }
};

  nextBtn.onclick = () => {
    loadNextQuestion();
  };
}