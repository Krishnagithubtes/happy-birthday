const balloonColors = ['#ff69b4', '#ffa07a', '#87cefa', '#98fb98', '#dda0dd'];

function createBalloon() {
  const balloon = document.createElement('div');
  balloon.className = 'balloon';
  balloon.style.left = Math.random() * 100 + 'vw';
  balloon.style.backgroundColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
  balloon.style.animationDuration = (6 + Math.random() * 5) + 's';

  document.getElementById('balloons-container').appendChild(balloon);

  // Remove balloon after animation
  setTimeout(() => {
    balloon.remove();
  }, 10000);
}

// Generate balloons every 500ms
setInterval(createBalloon, 500);
