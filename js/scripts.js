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


var command = function(actionSelect, typedObject, newUser){
  try {
    var inputCheck = eval(typedObject + '.' + actionSelect);
    if (inputCheck === "level-up") {
      newUser.level++
      displayLevel(newUser)
    } else {
      return inputCheck;
    }
  } catch(e) {
    return "Please enter a correct value"
  }
}


var displayLevel = function(newUser) {
  return levelArray[newUser.level].info;
}


// input name to variable name
var userInputConversion = function(userObjectInput) {
  if (userObjectInput === "weary-man"){
    return "levelOneWearyMan";
  }
}

//front-end
$(document).ready(function() {

  // name and character selection
  $("#user-input").submit(function(event){
    event.preventDefault();

    var inputName = $("#user-name-input").val();
    var newUser = new User(inputName);



    $(".name-output").text(newUser.userName);
      console.log("This is the current level: " + newUser.level);

      $("#in-game-text").append(displayLevel(newUser));

    // actual gameplay with user input and game dialogue
    $("#user-input-text").submit(function(event) {
      event.preventDefault();

      var userObjectInput = $("#user-object-input").val();
      var userActionSelect = $("#user-action-select option:selected").val();
      var convertInput = userInputConversion(userObjectInput);
      console.log(convertInput);

      $("#in-game-text").append("<li> You " + userActionSelect + " " + userObjectInput + "</li>");
      $("#in-game-text").append(command(userActionSelect, convertInput, newUser));
      $("#user-object-input").val("");
      $(".name-output").text(newUser.userName);



    });
  });


});
