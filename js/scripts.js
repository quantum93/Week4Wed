// ------------------------------- business logic ---------------------------------------------

// var UserAccount = [userOne, userTwo]

// UserAccount.prototype.changeUser() = function() {
//
// }

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
    console.log(this.currentScore);
  }
  if (score > 1 && this.currentScore < 20){
    this.currentScore += score
    console.log("here" + this.currentScore);
  }
  if (this.currentScore >= 20) {
    alert("Wow, You win!")
  }
  return this.currentScore
}

// ------------------------------- user interface logic ---------------------------------------
$(document).ready(function() {
  var inputNameOne = $("#nameOne").val();
  var inputNameTwo = $("#nameTwo").val();

  var currentPlay = new Player(name)
  $("#play").click(function (event) {
    event.preventDefault();

    var scoreOne = currentPlay.dicePlay();
    var scoreTwo = currentPlay.dicePlay();

    $("#userOne").text(inputNameOne);
    $("#playOne").text(scoreOne);

    $("#userTwo").text(inputNameTwo);
    $("#playTwo").text(scoreTwo);
  })
  // $("#hold").click(function (event) {
  //   event.preventDefault();
  //   var yourAccout = UserAccount.changeUser();
  //   $("#userName").text(inputName);
  //   $("#currentPlay").text(yourScore);
  // })
})

// var allPlayer = new PlayerAccount();
//
// function PlayerAccount () {
//   this.accounts = []
// }
//
// PlayerAccount.prototype.updateAccount = function () {
//   this.accounts.push()
// }
//
// function PlayerOne (name) {
//   this.nameOne = nameOne;
//   this.initialScore = 0;
//   this.scoreOne = score;
// }
//
// PlayerOne.prototype.roll(score) {
//   var score = Math.floor((Math.random()*6) + 1);
//   if (score === 1) {
//     this.scoreOne = this.initialScore
//     console.log(this.scoreOne);
//   } else {
//     this.scoreOne += score
//     console.log(this.scoreOne);
//   }
// }
//
// PlayerOne.prototype.hold() {
//
// }

// $(document).ready(function () {
//   $("").submit(function (event) {
//     event.preventDefault();
//     var inputPlayerOne = $("").val();
//     var inputPlayerTwo = $("").val();
//     var currentPlayer = new PlayerOne(inputPlayerOne);
//     $(".clickable").click(function() {
//       $("#").fadeToggle();
//       $("#").fadeToggle();
//     });
//   });
// });
