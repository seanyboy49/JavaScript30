// Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build our Functions
function togglePlay() {

  const method = video.paused ? 'play' : 'pause'; // use a ternary operator
  video[method](); // access the ternary operator from variable
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function setSpaceDown(e) {
  if (e.keyCode === 32) {
    togglePlay();
  }
}

function skip() {
  console.log(this.dataset)
  video.currentTime += parseFloat(this.dataset.skip);
}

// Hook up the event listeners
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)

toggle.addEventListener('click', togglePlay)
skipButtons.forEach(button => button.addEventListener('click', skip ))
window.addEventListener('keydown', setSpaceDown)
