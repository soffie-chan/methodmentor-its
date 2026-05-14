import { pickNextQuestion, thetaToMastery, getTheta, renderQuestion,processAnswer,updateProgressBar} from "./mastery.js";
import { questions } from "./questions.js";
import {
  submitAnswer
} from "./mastery.js";

export function startTutor() {
  const saved = JSON.parse(localStorage.getItem("tutorProgress") || "{}");

if (saved.theta !== undefined) {
  import("./mastery.js").then(mod => {
    mod.__setTheta(saved.theta); 
    mod.difficulty2Correct = saved.difficulty2Correct || 0;

    updateProgressBar(thetaToMastery(getTheta()));
  });
} else {
  updateProgressBar(thetaToMastery(getTheta()));
}


updateProgressBar(thetaToMastery(getTheta()));
  const intro = document.getElementById("section-intro");
  const quiz = document.getElementById("section-quiz");

  const startQuizBtn = document.getElementById("start-quiz-btn");
  const submitBtn = document.getElementById("submit-btn");
  const nextBtn = document.getElementById("next-btn");
  const feedback = document.getElementById("feedback");

  let currentQuestion = null;
  let attemptCount = 0;

  function loadNextQuestion() {
    currentQuestion = pickNextQuestion(getTheta(), questions);

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

  const input =
    document.getElementById("blank-input") ||
    document.getElementById("code-input");

  if (!input) return;
  if (!input.value.trim()) {
  feedback.textContent = "Please enter a value! I mean... coo.";
  return;
}

  const userAnswer = input.value.trim();
  const normalize = s => s.replace(/\s+/g, "").toLowerCase();
  const isCorrect = normalize(userAnswer) === normalize(currentQuestion.answer);

  if (isCorrect) {
    submitBtn.style.display = "none";
    nextBtn.style.display = "inline-block";
    return;
  }

  attemptCount++;

  feedback.textContent = currentQuestion.hint || "Try again.";

  if (attemptCount >= (currentQuestion.maxAttempts ?? 2)) {
  feedback.innerHTML = "Oops!<br>" + (currentQuestion.explanation || "Coo.");
  nextBtn.style.display = "inline-block";
}

};

  nextBtn.onclick = () => {
    loadNextQuestion();
  };
}