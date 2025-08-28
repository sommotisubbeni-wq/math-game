let score = 0;

function newProblem() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  const operator = Math.random() < 0.5 ? '+' : '-';
  const problem = `${a} ${operator} ${b}`;
  const answer = operator === '+' ? a + b : a - b;
  return { problem, answer };
}

function loadProblem() {
  const current = newProblem();
  currentProblem = current.answer;
  document.getElementById('problem').innerText = current.problem;
  document.getElementById('feedback').innerText = '';
  document.getElementById('answer').value = '';
}

let currentProblem;

document.getElementById('submit').addEventListener('click', () => {
  const userAnswer = Number(document.getElementById('answer').value);
  const feedback = document.getElementById('feedback');
  if (userAnswer === currentProblem) {
    feedback.innerText = 'Correct! 🎉';
    score++;
  } else {
    feedback.innerText = `Oops! The correct answer was ${currentProblem}.`;
    score = Math.max(0, score - 1);
  }
  document.getElementById('score').innerText = `Score: ${score}`;
  setTimeout(loadProblem, 1000);
});

loadProblem();
