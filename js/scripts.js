function evaluateTotal(num1, num2, num3, num4, num5){
  const total = num1 + num2 + num3 + num4 + num5;
  return total;
}
function determinOutput(int, userName){
  if(int <= 5)
  {
    $("div#output").append("<h3 id='outputTitle'>You're programming language is Swift!</h3>");
    $("div#output").append("<img class='img' id='outputImage' src='img/swift.png' alt='Swift logo.'>");
    $("div#output").append("<p id='outputInfo'> Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. and the open-source community. </p>");
  } else if(int > 6 && int <= 8)
  {
    $("div#output").append("<h3 id='outputTitle'>You're programming language is Go!</h3>");
    $("div#output").append("<img class='img' id='outputImage' src='img/go.png' alt='Go logo.'>");
    $("div#output").append("<p id='outputInfo'>Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. Go is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency.</p>");
  } else if(int > 8 && int <= 12){
    $("div#output").append("<h3 id='outputTitle'>You're programming language is Ruby!</h3>");
    $("div#output").append("<img class='img' id='outputImage' src='img/ruby.png' alt='Ruby logo.'>");
    $("div#output").append("<p id='outputInfo'>Ruby is an interpreted, high-level, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro 'Matz' Matsumoto in Japan. Ruby is dynamically typed and uses garbage collection and just-in-time compilation.</p>");
  } else if(int > 12 && int <= 16 && parseInt($("input:radio[name=question1]:checked").val()) === 4){
    $("div#output").append("<h3 id='outputTitle'>You're programming language is HTML!</h3>");
    $("div#output").append("<img class='img' id='outputImage' src='img/html.png' alt='Go logo.'>");
    $("div#output").append("<p id='outputInfo'>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.</p>");
  }else if(int > 12 && int <= 16){
    $("div#output").append("<h3 id='outputTitle'>You're programming language is JavaScript!</h3>");
    $("div#output").append("<img class='img' id='outputImage' src='img/javascript.png' alt='JavaScript logo.'>");
    $("div#output").append("<p id='outputInfo'>JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.</p>");
  } else if(int > 16 && int <= 20 && parseInt($("input:radio[name=question2]:checked").val()) === 1){
    $("div#output").append("<h3 id='outputTitle'>You're programming language is Python!</h3>");
    $("div#output").append("<img class='img' id='outputImage' src='img/python.png' alt='Python logo.'>");
    $("div#output").append("<p id='outputInfo'>Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.</p>");
  } else if(int > 16 && int <= 20){
    $("div#output").append("<h3 id='outputTitle'>You're programming language is c#!</h3>");
    $("div#output").append("<img class='img' id='outputImage' src='img/csharp.png' alt='Python logo.'>");
    $("div#output").append("<p id='outputInfo'>C# is a general-purpose, multi-paradigm programming language. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.</p>");
  }else {
    warning("You broke my code! How did you even get here?");
  }
  $("#formOne").hide();
  $("#retakeButton").css("display", "block"); //Using .css instead of show because show defaults to inline block.

  if(userName === ""){
    //If they did not enter name in the field do nothing
  } else{
    $("div#special").append("<p id='outputMessage'>Dear " + userName + ", I would like to personally thank you for taking the time to fill out my questionnaire! </p>");
    $("div#special").append('<button type="submit" class="btn" id="specialButton">Reward</button>')
    $("#specialButton").on("click", function(event){
      reward();
    });
  }
}
function reward(){
  window.location = ("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); // sorry
}
function resetQuiz(){
  //Check for existing ouptut and remove
  if($("#outputTitle").length)
  {
    $("#outputTitle").remove();
  } else {
    // do nothing
  }

  if($("#outputImage").length)
  {
    $("#outputImage").remove();
  } else {
    // do nothing
  }

  if($("#outputInfo").length)
  {
    $("#outputInfo").remove();
  } else {
    // do nothing
  }
  if($("#outputMessage").length)
  {
    $("#outputMessage").remove();
  } else {
    // do nothing
  }

  $("#retakeButton").hide();
  $("#formOne").show();
}
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    
    const userName = $("#userName").val();
    const answer1 = parseInt($("input:radio[name=question1]:checked").val());
    const answer2 = parseInt($("input:radio[name=question2]:checked").val());
    const answer3 = parseInt($("input:radio[name=question3]:checked").val());
    const answer4 = parseInt($("input:radio[name=question4]:checked").val());
    const answer5 = parseInt($("input:radio[name=question5]:checked").val());
    
    const totalValue = evaluateTotal(answer1, answer2, answer3, answer4, answer5);
    determinOutput(totalValue, userName);
  });
  $("#retakeButton").click(function(){
    resetQuiz();
  });
});