function Player(score) {
  this.score = score;
}

var roll = Math.floor(Math.random() * 6) + 1;

Player.prototype.incrementPlayerScore = function () {
  roll = Math.floor(Math.random() * 6) + 1;
  // if (roll === 1) {
  //   this.score = 0;
  // } else {
  //   this.score += roll;
  // }
  this.score += roll;
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

  const player1 = new Player(0);
  const player2 = new Player(0);
  let player1Score = 0;

  $("#player1").click(function () {
    player1Score = player1.incrementPlayerScore();

    if (isWinner(player1Score)) {
      $("#text").append("Player 1 is the winner");
      $(".game").hide()
      $("#output").show();
    }

    $("#score1").text("Score: " + player1Score);
    $("#dice1").text("Dice: " + roll);
  });

  $("#hold1").click(function () {
    $("#hold1").hide();
    $("#player1").hide();
    $("#hold2").show();
    $("#player2").show();
  });

  $("#player2").click(function () {
    const player2Score = player2.incrementPlayerScore();

    if (isWinner(player2Score)) {
      $("#text").append("Player 2 is the winner");
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
  })
});