document.addEventListener('DOMContentLoaded', () => {
  const drawBtn = document.getElementById('draw-btn');
  const clearBtn = document.getElementById('clear-btn');
  const resultContainer = document.getElementById('result-container');

  drawBtn.addEventListener('click', drawLotto);
  clearBtn.addEventListener('click', clearResults);

  function drawLotto() {
    const numbers = getRandomNumbers();
    const setDiv = document.createElement('div');
    setDiv.className = 'lotto-set';

    numbers.forEach(num => {
      const ball = createBall(num);
      setDiv.appendChild(ball);
    });

    resultContainer.appendChild(setDiv);
  }

  function getRandomNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
      const random = Math.floor(Math.random() * 45) + 1;
      numbers.add(random);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  }

  function createBall(number) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    ball.textContent = number;

    if (number <= 10) {
      ball.classList.add('yellow');
    } else if (number <= 20) {
      ball.classList.add('blue');
    } else if (number <= 30) {
      ball.classList.add('red');
    } else if (number <= 40) {
      ball.classList.add('gray');
    } else {
      ball.classList.add('green');
    }

    return ball;
  }

  function clearResults() {
    resultContainer.innerHTML = '';
  }
});
