// ------------------------------- business logic ---------------------------------------------

var UserAccount = [];
UserAccount.push($("#nameOne").val())
UserAccount.push($("#nameTwo").val())

// This is for swapping player
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

Player.prototype.dicePlay = function (diceNumber) {
  var score = 0;
  for (var i = 1; i <= diceNumber; i++) {
    score += Math.floor((Math.random()*6) + 1);
  }
  // console.log(score);
  if (score === diceNumber) {
    this.currentScore = 0
    swapUser()
    // console.log(this.currentScore);
  }
  if (score > diceNumber && this.currentScore < 100){
    this.currentScore += score
    // console.log("here" + this.currentScore);
  }
  if (this.currentScore >= 100) {
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
    var diceNumber = parseInt($("#dice").val());
    // console.log(inputNameOne);
    // console.log(inputNameTwo);
    if (turn === 0) {
      var scoreOne = playerOne.dicePlay(diceNumber);
      $("#userOne").text(inputNameOne);
      $("#playOne").text(scoreOne);
    }
    if (turn === 1) {
      var scoreTwo = playerTwo.dicePlay(diceNumber);
      $("#userTwo").text(inputNameTwo);
      $("#playTwo").text(scoreTwo);
    }
  });

  $(".hold").click(function () {
    swapUser()
  });
});
