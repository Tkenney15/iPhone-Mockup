

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
