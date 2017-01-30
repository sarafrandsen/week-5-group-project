//business-logic
var User = function(inputName){
  this.name = inputName;
}


//front-end
$(document).ready(function() {
  var inputName = $("#user-name").val();
  var newUser = new User(inputName);

  $(".name-output").text(newUser.name);
});
