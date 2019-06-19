// ------------------------------- business logic ---------------------------------------------
function PlayerOne (name) {
  this.nameOne = nameOne;
  this.initialScore = 0;
  this.scoreOne = score;
}

PlayerOne.prototype.roll(score) {
  var score = Math.floor((Math.random()*6) + 1);
  if (score === 1) {
    this.scoreOne = this.initialScore
  } else {
    this.scoreOne += score
  }
}

PlayerOne.prototype.hold() {

}

// function PlayerTwo (name) {
//   this.nameTwo = nameTwo;
//   this.initialScore = 0;
//   this.scoreTwo = score;
// }
//
// PlayerTwo.prototype.roll(score) {
//   var score = Math.floor((Math.random()*6) + 1);
//   if (score === 1) {
//     this.scoreTwo = this.initialScore
//   } else {
//     this.scoreTwo += score
//   }
// }
//
// PlayerTwo.prototype.hold() {
//
// }

// ------------------------------- user interface logic ---------------------------------------
$(document).ready(function () {
  $("").submit(function (event) {
    event.preventDefault();
    var inputPlayerOne = $("").val();
    var inputPlayerTwo = $("").val();

  });
});
