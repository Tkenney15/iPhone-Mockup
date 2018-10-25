// $('document').ready({
  
  
// });







// //put in function
// function enableSignIn() {


// //check if AppleId has value
// var appleIDElem = document.getElementByID('appleID')
// console.log(appleIDElem.value.length);

// //check if password has value
// var passElem = document.getElementByID('password')
// console.log('password:' + (passElem.value.length);

// //if they do, enable button
// if (appleIDElem.value.length != 0) {
//   document.getElementById('signInBtn').disabled = false;

// } else if (appleIDElem.value.length == 0) {  
//   document.getElementById('signInBtn').disabled = true;
// }
  

// }   












// var x = document.getElementById('appleID');
// x.value = "Enter your Apple ID";
// document.getElementsByTagName('h1')[0].innerText = "hi there";

// var flexDivs = document.getElementsByTagName('div');

// console.log(flexDivs.length);

// flexDivs[i].ClassList.add("item-box");

// for (i = 1; i < flexDivs.length; i++) {
//      //flexDivs.ClassList.add("item-box");
  
// }


$(document).ready(function() {
  
 
  
  //initialize common variables
  input = $("input[type=text]");
  input2 = $("input[type=password]");
  button = $("button");
  activeButton = $("activeButton");
  
  toggleButton();
   
  input
    .keypress(toggleButton)
    .keyup(toggleButton);
  
  input2
    .keypress(toggleButton)
    .keyup(toggleButton);
  
  function toggleButton() {
    len = input.val().length;
    len2 = input2.val().length;

    if (len >=3 & len2 >=3 ) {
      button
        .text("Sign In")
        .removeAttr("disabled")
        .addClass('activeButton'); 
    } 
    
    else {
       button
        .attr("disabled", "disabled")
        .text("Sign In...")
        .removeClass('activeButton');
      
    }
  };
  
  //JQuery ----
  $('button').click(doThis);
  
  function doThis(){
    alert('Sucessfully Signed In!');
    
  }
  
});


