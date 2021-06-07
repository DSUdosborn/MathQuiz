var thisAnswer;

function makeQuestion() {
  var r1= Math.floor(Math.random() *100);
  var r2= Math.floor(Math.random() *100);

  var thisAnswer = r1 + r2;

  var qv1 = document.querySelector("#questionLeft");
      questionLeft.innerHTML = r1;
  var qv1 = document.querySelector("#questionRight");
      questionRight.innerHTML = r2;

  return thisAnswer;
 }

var thisAnswer =makeQuestion();

var checkAnswer = document.querySelector("#submit-answer");

checkAnswer.onclick = function() {

    console.log("clicked");

    var inputAnswer = document.querySelector("#answer-field");
    console.log("attempted answer: ", inputAnswer.value);

    var feedback = document.querySelector("#feedback");
    if (inputAnswer.value == thisAnswer) {
      feedback.innerHTML = "Correct Answer";
      feedback.style.color = "#00FF00";
      thisAnswer =makeQuestion();
      inputAnswer.value = "";

    } else {
      feedback.innerHTML = "Wrong Answer";
      feedback.style.color = "#FF0000";
    }


};
