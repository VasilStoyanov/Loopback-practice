(function() {
  "use strict"

  $("#login-btn").on("click", function() {
    var userData = {
      username: $("#userName").val(),
      password: $("#userPassword").val()
    }

    $.post("/login", userData, function(error, secretMessage) {
      if(error) {
         toastr.error(error);
      }
      else {
        toastr.success("Welcome, " + userData.username);
      }
    });
  });
})();
