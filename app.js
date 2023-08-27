var score = 0;
var timerVal = 60;
var hitNum = 0;
var reset = document.querySelector("#resetbtn");

hitScore();
bubbleCreate();
timer();

function bubbleCreate() {
  var bubble = "";
  for (var i = 1; i <= 175; i++) {
    var rnum = Math.floor(Math.random() * 10);
    bubble = bubble + `<div class="bubble">${rnum}</div>`;
  }

  document.querySelector("#bottom-panel").innerHTML = bubble;
}
function timer() {
  var timerInt = setInterval(() => {
    if (timerVal > 0) {
      timerVal--;
      document.querySelector("#timerVal").textContent = timerVal;
    } else {
      clearInterval(timerInt);
      document.querySelector("#bottom-panel").innerHTML = `  <div>
      <h1 class="text-white game-over">Game Over :)</h1>
      <h2 class="text-white">Total Score: ${score}</h2>
    </div>`;
    }
  }, 1000);
}
function hitScore() {
  hitNum = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitNum;
}

function increaseScore() {
  score = score + 10;
  document.querySelector("#scoreVal").textContent = score;
}
document
  .querySelector("#bottom-panel")
  .addEventListener("click", function (bubbleDetail) {
    var clickedNum = Number(bubbleDetail.target.textContent);
    if (clickedNum == hitNum) {
      increaseScore();
      hitScore();
      bubbleCreate();
    }
  });
function resetGame() {
  score = 0;
  timerVal = 60;
  hitNum = 0;
  document.querySelector("#scoreVal").textContent = score;
  document.querySelector("#timerVal").textContent = timerVal;
  document.querySelector("#hitVal").textContent = hitNum;
  bubbleCreate();
  timer();
}
document.querySelector("#resetbtn").addEventListener("click", function () {
  resetGame();
});
