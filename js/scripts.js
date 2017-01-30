//business-logic
var User = function(inputName){
  this.userName = inputName;
  this.inventory = []
  this.hp = 100;
  this.level = 0;
};

Object.prototype.info = function() {
  return this.objectDescription;
};


var Command = function(playerInput){
  if (/^talk/i.test(playerInput)) {
    alert("You've talked");
  } else if (/^info/i.test(playerInput) || /^lookat/i.test(playerInput)) {
    alert("You've asked for info");
  } else if (/^pickup/i.test(playerInput)) {
    alert("You've picked something up");
  } else if (/^go/i.test(playerInput)) {
    alert("You've chosen to go somewhere");
  } else if (/^run/i.test(playerInput)) {
    alert("You've chosen to run.");
  } else if (/^help/i.test(playerInput)) {
    alert("Please try one of the following: talk, info, lookat, pickup, go, run, or help")
  } else {
    alert("You've entered an incorrect command");
  }
}



//front-end
$(document).ready(function() {
  $("#user-input").submit(function(event){
    event.preventDefault();

    var inputName = $("#user-name").val();
    var newUser = new User(inputName);
    newUser.level++
    $(".name-output").text(newUser.name);

  })
});
