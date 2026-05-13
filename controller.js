import { pickNextQuestion, getTheta, renderQuestion,processAnswer} from "./mastery.js";
import { questions } from "./questions.js";

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
    intro.style.display = "none";
    quiz.style.display = "block";
    loadNextQuestion();
  };

  // ------------------------------
  // Load next adaptive question
  // ------------------------------
  function loadNextQuestion() {
    currentQuestion = pickNextQuestion(getTheta(), questions);
    renderQuestion(currentQuestion);

    feedback.textContent = "";
    nextBtn.style.display = "none";
    submitBtn.style.display = "inline-block";
  }

  // ------------------------------
  // Submit coding answer
  // ------------------------------
  submitBtn.onclick = () => {
    const input = document.getElementById("code-input");

    if (!input || !input.value.trim()) {
      feedback.textContent = "Type your answer first.";
      feedback.style.color = "orange";
      return;
    }

    const normalize = str => str.replace(/\s+/g, "").toLowerCase();
    const userAnswer = input.value.trim();
    const isCorrect = normalize(userAnswer) === normalize(currentQuestion.answer);

    processAnswer(currentQuestion, isCorrect);

    feedback.innerHTML = isCorrect
      ? `Correct!<br>${currentQuestion.explanation}`
      : `Incorrect.<br>${currentQuestion.explanation}`;

    feedback.style.color = isCorrect ? "green" : "red";

    submitBtn.style.display = "none";
    nextBtn.style.display = "inline-block";
  };

  nextBtn.onclick = () => loadNextQuestion();

  // ------------------------------
  // LEVEL UP → unlock new HTML
  // ------------------------------
  document.addEventListener("levelUp", () => {
    quiz.style.display = "none";
    unlocked.style.display = "block";
  });
}
