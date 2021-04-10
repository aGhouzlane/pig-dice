function Player(score, totalScore) {
  this.score = score;
  this.totalScore = totalScore;
}

var roll = Math.floor(Math.random() * 6) + 1;

Player.prototype.incrementPlayerScore = function () {
  roll = Math.floor(Math.random() * 6) + 1;
  if (roll === 1) {
    this.score = 0;
  } else {
    this.score += roll;
  }
  return this.score;
}

function isWinner(playerScore) {
  if (playerScore >= 100) return true;
}

//UI
$(document).ready(function () {

  $("#start").click(function () {
    $(".game").show();
    $("#start").hide();
  });

  $("#playAgain").click(function () {
    $(".game").show();
    $("#output").hide();
    player1.score = 0;
    player2.score = 0;
    $("#score1").text("");
    $("#dice1").text("");
    $("#score2").text("");
    $("#dice2").text("");
    $("#hold1").show();
    $("#player1").show();
    $("#hold2").show();
    $("#player2").show();
  });

  const player1 = new Player(0, 0);
  const player2 = new Player(0, 0);

  let player1Score = 0;

  $("#player1").click(function () {
    player1Score = player1.incrementPlayerScore();

    if (isWinner(totalScore1)) {
      $("#text").text("Player 1 is the winner");
      $(".game").hide()
      $("#output").show();
    }

    $("#score1").text("Score: " + player1Score);
    $("#dice1").text("Dice: " + roll);
  });

  let totalScore1 = 0;
  let totalScore2 = 0;

  $("#hold1").click(function () {
    $("#hold1").hide();
    $("#player1").hide();
    $("#hold2").show();
    $("#player2").show();

    totalScore1 += player1.score + player1.totalScore;
    console.log("total 1: " + totalScore1);
    player1Score = 0;
    player1.score = 0;

    $("#score1").text("Score: " + player1Score);
  });

  let player2Score = 0;

  $("#player2").click(function () {
    player2Score = player2.incrementPlayerScore();

    if (isWinner(totalScore2)) {
      $("#text").text("Player 2 is the winner");
      $(".game").hide()
      $("#output").show();
    }

    $("#score2").text("Score: " + player2Score);
    $("#dice2").text("Dice: " + roll);
  });

  $("#hold2").click(function () {
    $("#hold2").hide();
    $("#player2").hide();
    $("#hold1").show();
    $("#player1").show();

    totalScore2 += player2.score + player2.totalScore;
    console.log("total 2: " + totalScore2);

    player2Score = 0;
    player2.score = 0;

    $("#score2").text("Score: " + player2Score);
  })
});