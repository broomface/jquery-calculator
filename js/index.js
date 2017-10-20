$(document).ready(function() {

  var str = ""; // holding all items clicked
  var screen = $("#screen");
  // shortcut to screen
  // better to use these globals for items that will be accessed multiple times with multiple functions



 $("span").on("click", function(event) {
   event.preventDefault();
  var target = $(event.target);
  var text=
  target.context.innerHTML;
   str += text;
  screen.html(str);
});
// span of each button

//.click with a callback function
// or .on (click and callback function)

 $('#equals').on('click', function(event){
   str = str.replace(/=/g,'')
   // remove = for calculation

   // str = sill replace all witin the string
   str = str.replace(/x/g, '*');
   str = str.replace(/÷/g, '/');

   // total will store evaluation of the string.
   str = eval(str);
   screen.html(str);
 });

// clear event
 $('#clear').click(function(event){

event.preventDefault();
   str = '';
   screen.html('');

  });
});

/*
  if (typeof parseInt(userInput) === "number"){
    arr.push(userInput);
    screen.append(userInput);
    console.log(typeof userInput);
  };

  else if (userInput === "+"){
    arr.push("+");
    alert(arr);
  }

  else if (userInput === "-"){
    arr.push("-");
    alert(arr);
  }

  else if (userInput === "x"){
    arr.push("*");
    console.log(arr);
  }

  else if (userInput === "÷"){
    arr.push("/");
    console.log(arr);
  }

  else if (userInput === "C"){

    arr.empty(arr);
    console.log(screen, arr)
  }

  else if (userInput === "="){
    equate(arr);
    console.log(arr);
  }

function equate(arr){  // =
    var result = eval(arr);
    screen.empty();
    screen.append(result);

}
*/




//
//   if (event.target.id==="clear"){
//     alert('this is clear');
//   }
//   else if (event.target.ClassName === "operator"){
//     constructor() {
//
//     }
//   } === 'operator'){
//     alert('this is an operator');
//   }
//
//   else if (event.target === 'span'){
//   alert('this is a number');
// }

  // output...to the screen (toScreen function)

  // if number is pressed, push into an array...ish, display to the screen
  // if operator is pressed, (operator functions) and add the operator to the screen
  // if the operand, operator, operand format is valid, equate
  // equal button, equate arithmetic, display answer (do not display =)
  // set errors... operator without numbers
  // clear button (empty array)
  // create error if not in correct format, attempt to divide by zero, display error

  //event listener to buttons-container

  //mouse click for each button

  // #buttons-container
  // .buttons


/*
if
$( "#other" ).click(function() {
  $( "#target" ).click();
});


$("button").on( "click", function() {
if (id= "clear"){
 a
}

$( "div" ).on( "mouseenter mouseleave", function() {
    console.log( "mouse hovered over or left a div" );
});
*/
