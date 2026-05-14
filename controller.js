import { pickNextQuestion, thetaToMastery, getTheta, renderQuestion,processAnswer,updateProgressBar} from "./mastery.js";
import { questions } from "./questions.js";
import {
  submitAnswer
} from "./mastery.js";

export function startTutor() {
  const intro = document.getElementById("section-intro");
  const quiz = document.getElementById("section-quiz");
  const unlocked = document.getElementById("section-unlocked");

  const startQuizBtn = document.getElementById("start-quiz-btn");
  const submitBtn = document.getElementById("submit-btn");
  const nextBtn = document.getElementById("next-btn");
  const feedback = document.getElementById("feedback");


  let currentQuestion = null;

  // ------------------------------
  // Start quiz
  // ------------------------------
  startQuizBtn.onclick = () => {
        loadNextQuestion();

    intro.style.display = "none";
    quiz.style.display = "block";
      updateProgressBar(thetaToMastery(getTheta())); 
  };

  // ------------------------------
  // Load next adaptive question
  // ------------------------------
 function loadNextQuestion() {

  currentQuestion =
    pickNextQuestion(getTheta(), questions);

  renderQuestion(currentQuestion);

  const mastery =
    thetaToMastery(getTheta());

  updateProgressBar(mastery);

  feedback.textContent = "Coo.";
  nextBtn.style.display = "none";
  submitBtn.style.display = "inline-block";
}
nextBtn.onclick = () => {
    loadNextQuestion();
  };



  // ------------------------------
  // Submit coding answer
  // ------------------------------
submitBtn.onclick = () => {
  const input =
    document.getElementById("code-input") ||
    document.getElementById("blank-input");

  if (!input || !input.value.trim()) return;

  const userAnswer = input.value.trim();

  const normalize = str =>
    str.replace(/\s+/g, "").toLowerCase();

  const isCorrect =
    normalize(userAnswer) ===
    normalize(currentQuestion.answer);

  processAnswer(currentQuestion, isCorrect);

  feedback.innerHTML = isCorrect
    ? `Correct!<br>${currentQuestion.explanation}`
    : `Incorrect.<br>${currentQuestion.explanation}`;

  feedback.style.color = isCorrect ? "green" : "red";

  nextBtn.style.display = "inline-block";
  submitBtn.style.display = "none";
};
}