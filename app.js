
var checkAnswer = document.querySelector("#submit-answer");



checkAnswer.onclick = function() {

    console.log("clicked");

    var inputAnswer = document.querySelector("#answer-field");
    console.log("attempted answer: ", inputAnswer.value);

    var feedback = document.querySelector("#feedback");
    if (inputAnswer.value =="13") {
      feedback.innerHTML = "Correct Answer";
    } else {
      feedback.innerHTML = "Wrong Answer";
    }


};
