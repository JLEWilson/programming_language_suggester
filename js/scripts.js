function evaluateTotal(num1, num2, num3, num4, num5){
  const total = num1 + num2 + num3 + num4 + num5;
  return total;
}
function determinOutput(int){
  
  if(int <= 6)
  {
    $("div#output").append("<h3>You're programming language is Swift!</h3>");
    $("div#output").append("<img class='img' src='img/swift.png'>");
    $("div#output").append("<p>Information about why you got swift goes here</p>");
  } else if(int > 6 && int <= 8)
  {
    $("div#output").append("<h3>You're programming language is Go!</h3>");
    $("div#output").append("<img class='img' src='img/go.png'>");
    $("div#output").append("<p>Information about why you got go goes here</p>");
  } else if(int > 8 && int <= 12){
    $("div#output").append("<h3>You're programming language is Ruby!</h3>");
    $("div#output").append("<img class='img' src='img/ruby.png'>");
    $("div#output").append("<p>Information about why you got ruby goes here</p>");
  } else if(int > 12 && int <= 16){
    $("div#output").append("<h3>You're programming language is JavaScript!</h3>");
    $("div#output").append("<img class='img' src='img/javascript.png'>");
    $("div#output").append("<p>Information about why you got JavaScript goes here</p>");
  } else if(int > 16 && int <= 20 && parseInt($("input:radio[name=question2]:checked").val()) === 1){
    $("div#output").append("<h3>You're programming language is Python!</h3>");
    $("div#output").append("<img class='img' src='img/python.png'>");
    $("div#output").append("<p>Information about why you got python goes here</p>");
  } else if(int > 16 && int <= 20){
    alert("you are c#");
  }else {
    warning("You broke my code! How did you even get here?");
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
    
    
    const totalValue = evaluateTotal(answer1, answer2, answer3, answer4, answer5);
    determinOutput(totalValue);
  });
});