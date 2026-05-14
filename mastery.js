// ------------------------------
// IRT: Update Theta
// ------------------------------
export let difficulty2Correct = 0;

export function __setTheta(value) {
  theta = value;
}
//restore internal state.

export function updateTheta(theta, question, isCorrect, k = 0.2) {
  const a = question.discrimination;
  const b = question.difficulty;
  const c = question.guess;

  const exponent = -a * (theta - b);
  const logistic = 1 / (1 + Math.exp(exponent));
  const P = c + (1 - c) * logistic;

  const r = isCorrect ? 1 : 0;

  const newTheta = theta + k * (r - P);
  console.log("θ updated:", theta, "→", newTheta, "correct?", isCorrect);

  return newTheta;
}

// ------------------------------
// Theta state
// ------------------------------
let theta = 0;

export function getTheta() {
  return theta;
}

// ------------------------------
// Convert theta → mastery %
// ------------------------------
export function thetaToMastery(theta) {
  const mastery = 1 / (1 + Math.exp(-theta));
  return Math.round(mastery * 100);
}

// ------------------------------
// Update progress bar
// ------------------------------
export function updateProgressBar(mastery) {
  const bar = document.getElementById("progress-bar");

console.log("mastery =", mastery);
  if (!bar) return;

  bar.style.width = mastery + "%";

  if (mastery < 40) bar.style.background = "#e57373";
  else if (mastery < 70) bar.style.background = "#ffb74d";
  else bar.style.background = "#81c784";
  if (mastery < 15) {
    const feedback = document.getElementById("feedback");
    const pablo = document.getElementById("pablo")
    if (feedback) {
      feedback.innerHTML = 
        "Would you like to read the textbook again? <u>Click me, the pigeon!</u>";
      feedback.style.color = "#006b9d";
    }
    pablo.onclick = () => {
      location.reload();
    };
  }
}

// ------------------------------
// Process answer + level up
// ------------------------------
export function processAnswer(question, isCorrect) {
  theta = updateTheta(theta, question, isCorrect);
  localStorage.setItem("tutorProgress", JSON.stringify({
  theta,
  difficulty2Correct
  }));
  const mastery = thetaToMastery(theta);

  // Track difficulty 2 correct answers
  if (question.difficulty === 2 && isCorrect) {
    difficulty2Correct++;
    console.log("Difficulty 2 correct count:", difficulty2Correct);
  }

  updateProgressBar(mastery);

  // Level-up condition:
  // 1. Mastery >= 85%
  // 2. At least 2 difficulty-2 questions correct
  if (mastery >= 85 && difficulty2Correct >= 2) {
    console.log("LEVEL UP triggered!");
    document.dispatchEvent(new CustomEvent("levelUp"));
  }
}

// ------------------------------
// Pick next question (adaptive)
// ------------------------------
let lastQuestionId = null;

export function pickNextQuestion(theta, questions) {
  const sorted = [...questions].sort((a, b) =>
    Math.abs(a.difficulty - theta) - Math.abs(b.difficulty - theta)
  );

  const filtered = sorted.filter(q => q.question_id !== lastQuestionId);
  const candidates = filtered.length > 0 ? filtered : sorted;

  const top = candidates.slice(0, 3);
  const next = top[Math.floor(Math.random() * top.length)];

  lastQuestionId = next.question_id;
  return next;
}

// ------------------------------
// Render coding question
// ------------------------------
export function renderQuestion(q) {

  const container =
    document.getElementById(
      "question-container"
    );

  if (!container) return;

  // Syntax fill-in-the-blank
if (q.type === "syntax") {

  const rendered =
    (q.template || "").replace(

      "___",

      `<input
        id="blank-input"
        class="blank"
        type="text"
      >`
    );

  container.innerHTML = `

    <p>${q.prompt}</p>

    <div class="context">
${q.context || ""}
    </div>

    <div class="template">
${rendered}
    </div>
  `;
}  // Coding questions
  else if (q.type === "coding") {

    container.innerHTML = `
      <p>${q.prompt}</p>

      <textarea
        id="code-input"
        placeholder="Type your code here..."
      ></textarea>

      <div>
${q.starterCode || ""}
      </div>
    `;
  }
}


export function submitAnswer(currentQuestion) {

  const feedback =
    document.getElementById(
      "feedback"
    );

  let userCode = "";

  // Syntax questions
  if (
    currentQuestion.type ===
    "syntax"
  ) {

    const input =
      document.getElementById(
        "blank-input"
      );

    if (!input) return;

    userCode =
      input.value.trim();
  }

  // Coding questions
  else if (
    currentQuestion.type ===
    "coding"
  ) {

    const input =
      document.getElementById(
        "code-input"
      );

    if (!input) return;

    userCode =
      input.value.trim();
  }

  if (!userCode) {

    feedback.textContent =
      "Type your answer first.";

    return;
  }

  const normalize = str =>
    str
      .replace(/\s+/g, "")
      .toLowerCase();

  const isCorrect =
    normalize(userCode) ===
    normalize(
      currentQuestion.answer
    );

  processAnswer(
    currentQuestion,
    isCorrect
  );

  feedback.innerHTML =
    isCorrect
      ? "Correct!<br>" +
        (currentQuestion.explanation || "")

      : "Incorrect.<br>" +
        (currentQuestion.explanation || "");

  feedback.style.color =
    isCorrect
      ? "green"
      : "red";
}