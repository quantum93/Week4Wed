// ------------------------------- business logic ---------------------------------------------

var UserAccount = [];
UserAccount.push($("#nameOne").val())
UserAccount.push($("#nameTwo").val())

var turn = 0

function swapUser () {
  if (turn === 0) {
    turn = 1;
  } else {
    turn = 0;
  }
}

// Under here, this works for sinlge player but not for two players
function Player (name) {
  this.userName = name;
  this.currentScore = 0
}

Player.prototype.dicePlay = function () {
  var score = Math.floor((Math.random()*6) + 1);
  console.log(score);
  if (score === 1) {
    this.currentScore = 0
    // console.log(this.currentScore);
  }
  if (score > 1 && this.currentScore < 20){
    this.currentScore += score
    // console.log("here" + this.currentScore);
  }
  if (this.currentScore >= 20) {
    alert("Wow, You win!")
  }
  return this.currentScore
}

// ------------------------------- user interface logic ---------------------------------------
$(document).ready(function() {
  var playerOne = new Player(name)
  var playerTwo = new Player(name)

  $("#play").click(function (event) {
    event.preventDefault();
    var inputNameOne = $("#nameOne").val();
    var inputNameTwo = $("#nameTwo").val();
    console.log(inputNameOne);
    // console.log(inputNameTwo);
    if (turn === 0) {
      var scoreOne = playerOne.dicePlay();
      $("#userOne").text(inputNameOne);
      $("#playOne").text(scoreOne);
    }
    if (turn === 1) {
      var scoreTwo = playerTwo.dicePlay();
      $("#userTwo").text(inputNameTwo);
      $("#playTwo").text(scoreTwo);
    }
  });

  $("#hold").click(function () {
    swapUser()
  });
});
