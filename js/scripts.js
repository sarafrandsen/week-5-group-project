//business-logic
var User = function(inputName){
  this.name = inputName;
}


//front-end
$(document).ready(function() {
  $("#user-input").submit(function(event){
    event.preventDefault();
    
    var inputName = $("#user-name").val();
    var newUser = new User(inputName);

    $(".name-output").text(newUser.name);
  })
});
