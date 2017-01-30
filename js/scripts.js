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

  // name and character selection
  $("#user-input").click(function(event){
    event.preventDefault();

    var inputName = $("#user-name-input").val();
    var newUser = new User(inputName);

    $(".name-output").text(newUser.userName);

  });

  // actual gameplay with user input and game dialogue
  $("#user-input-text").submit(function(event) {
    event.preventDefault();

    var userObjectInput = $("#user-object-input").val();
    var userActionSelect = $("#user-action-select option:selected").val();

    $("#in-game-text").append("<li> You " + userActionSelect + " " + userObjectInput + "</li>");
    $("#user-object-input").val("");
    $(".name-output").text(newUser.userName);

    newUser.level++


  })
});
