document.addEventListener("DOMContentLoaded", function() {

    // Add 5 to score
    document.getElementById("increase-5").addEventListener("click", function() {
       updateScore(getScore() + 5);
    });

    // Sub 5 from score
    document.getElementById("decrease-5").addEventListener("click", function() {
        if(getScore() <= 5){
          updateScore(0);
        }else{
          updateScore(getScore() - 5);
        }
    });

    // Set custom score
    document.getElementById("submit-custom-score").addEventListener("click", function() {
        var score = document.getElementById("custom-score").value;
        console.log(Math.floor(score));
        if(Math.floor(score) !== "NULL" && score >= 0){
            updateScore(score);
        }

    });

    // Get the score
    var getScore = function() {
      var score = document.getElementById("score").innerHTML;
      var scoreNum = score.split(" ")[0];
      return parseInt(scoreNum);
    }

    // Update score
    var updateScore = function(score) {
      document.getElementById("score").innerHTML = score + " Points";
    }


});
