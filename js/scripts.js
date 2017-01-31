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

var randomNumberGenerator = function(min, max) {
  return Math.random() * (max - min) + min;
}

var combat = function(newUser, enemy){
  var enemyDamage = randomNumberGenerator(0, 1);
  var newUserDamage = randomNumberGenerator(5, 10);

  enemy.hp -= newUserDamage;
  newUser.hp -= enemyDamage;

  if (enemy.hp >= 0 && newUser.hp > 0) {
    return "You have done " + newUserDamage +" to the" + enemy.name + ". He has " + enemy.hp + " health left.";
  } else if (newUser.hp <= 0) {
    return "You have died. Game over.";
  } else {
    newUser.level += 1;
    return displayLevel(newUser);
  }

};


var command = function(actionSelect, typedObject, newUser){
  try {
    var inputCheck = eval(typedObject + '.' + actionSelect);
    if (inputCheck === "level-up") {
      newUser.level += 1;
      return displayLevel(newUser);
    } else if (inputCheck === "double-level-up"){
      newUser.level += 2;
      return displayLevel(newUser);
    } else if (inputCheck === "fight1") {
        return combat(newUser, enemy1)
    } else if (inputCheck === "fight2") {
        return combat(newUser, enemy2)
    } else if (inputCheck === "fight3") {
        return combat(newUser, enemy3)
    } else {
      return inputCheck;
    }
  } catch(e) {
    return "That is not an available choice."
  }
}




var displayLevel = function(newUser) {
  return levelArray[newUser.level].info;
  // console.log(levelArray[newUser.level].info);
  // $("#in-game-text").append(append);
}


// input name to variable name
var userInputConversion = function(userObjectInput) {
  // if (userObjectInput === "planet"){
  //   return "planet";
  // } else if (userObjectInput === "middle-aged man") {
  //   return "levelOneMiddleAgedMan";
  // } else if (userObjectInput === "paper") {
  //   return "levelTwoPaper";
  // } else if (userObjectInput === "blacksmith") {
  //   return "levelThreeBlacksmith";
  // } else if (userObjectInput === "tent") {
  //   return "levelThreeTent";
  // } else if (userObjectInput === "pigs") {
  //   return "levelThreePigs";
  // } else if (userObjectInput === "hunt") {
  //   return "levelFourHunt";
  // } else if (userObjectInput === "orcs") {
  //   return "levelFiveOrcs";
  // } else {
  //   return "I don't understand what you mean."
  // }
  return userObjectInput
};

//front-end

var frontEndFight = function(newUser, enemy) {
  console.log(newUser);
  console.log(enemy);
  $("#user-hp").text(newUser.hp);
  $("#enemy-hp").text(enemy.hp);
  $(".fight-div").show();
  $("#roll-for-damage").click(function(){
    combat(newUser, enemy);
    $("#user-hp").text(newUser.hp);
    $("#enemy-hp").text(enemy.hp);
    if(combatCheck(newUser, enemy) === true){
      $(".fight-div").hide();
      return displayLevel(newUser);
    } else if(combatCheck(newUser, enemy) === false){
      $(".fight-div").hide();
      return "Game Over";
    } else {
      frontEndFight(newUser, enemy);
    }
  });
};

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

      $("#in-game-text").append("<li> You " + userActionSelect + " " + userObjectInput + "</li>");
      var append = command(userActionSelect, convertInput, newUser);
      $("#in-game-text").append(append);
      $("#user-object-input").val("");
      $(".name-output").text(newUser.userName);



    });
  });


});
