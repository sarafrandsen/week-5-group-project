//business-logic
var User = function(inputName){
  this.userName = inputName;
  this.inventory = []
  this.hp = 100;
  this.level = 0;
};

Object.prototype.levelChange = function(condition) {
  if (condition) {
    newUser.level++
  } else {
  }
}


var command = function(playerInput, typedInput, newUser){
  if (!typedInput.playerInput) {
    return "You've entered an incorrect command, type 'help' for a list of commands";
  } else if (typedInput.playerInput === true) {
    newUser.level++
    displayLevel(newUser)
  } else {
      return typedInput.playerInput;
  }
}



var displayLevel = function(newUser) {
  return levelArray[newUser.level].info;
}



//front-end
$(document).ready(function() {
  $("#user-input").submit(function(event){
    event.preventDefault();

    var inputName = $("#user-name").val();
    var newUser = new User(inputName);
    $(".name-output").text(newUser.name);

    newUser.level++


  })
});
