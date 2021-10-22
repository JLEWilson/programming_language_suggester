function evaluateTotal(num1, num2, num3, num4, num5){
  const total = num1 + num2 + num3 + num4 + num5;
  return total;
}
function determinOutput(int){
  if(int <= 6)
  {
    alert("you are swift");
  } else if(int > 6 && int <= 10)
  {
    alert("you are go");
  } else if(int > 10 && int <= 15){
    alert("you are ruby#");
  } else if(int > 15 && int <= 20){
    alert("you are javascript");
  } else if(int > 20 && int <= 25){
    alert("you are c#");
  }
  //Add special conditions for python, html, and maybe some others
}

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    
    const answer1 = parseInt($("input:radio[name=question1]:checked").val());
    const answer2 = parseInt($("input:radio[name=question2]:checked").val());
    const answer3 = parseInt($("input:radio[name=question3]:checked").val());
    const answer4 = parseInt($("input:radio[name=question4]:checked").val());
    const answer5 = parseInt($("input:radio[name=question5]:checked").val());
    
    determineOutput(evaluateTotal(answer1, answer2, answer3, answer4, answer5));
    
  });
});