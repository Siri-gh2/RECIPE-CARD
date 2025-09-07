let currentStep = 0;
let steps;
let timerInterval;
let secondsElapsed = 0;

function toggleSection(id) {
  const section = document.getElementById(id);
  section.classList.toggle('hidden');
}

function startCooking() {
  steps = document.querySelectorAll('#steps li');
  if (steps.length === 0) return;

  document.querySelector('.next-btn').disabled = false;
  highlightStep(currentStep);
  startTimer();
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    steps[currentStep].classList.remove('active-step');
    currentStep++;
    highlightStep(currentStep);
    updateProgress();
  } else {
    alert('🎉 You’ve finished all steps!');
    clearInterval(timerInterval);
  }
}

function highlightStep(index) {
  steps[index].classList.add('active-step');
}

function updateProgress() {
  const percent = ((currentStep + 1) / steps.length) * 100;
  document.getElementById('progress-bar').style.width = percent + '%';
}

// Timer logic
function startTimer() {
  const timer = document.getElementById('timer');
  timerInterval = setInterval(() => {
    secondsElapsed++;
    const minutes = Math.floor(secondsElapsed / 60).toString().padStart(2, '0');
    const seconds = (secondsElapsed % 60).toString().padStart(2, '0');
    timer.textContent = `⏳ ${minutes}:${seconds}`;
  }, 1000);
}
