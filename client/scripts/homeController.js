(function() {
  "use strict"

  function HomeController($scope, UserState) {
    // Testing purpose
    // TODO: Remove later...
    console.log("Hello from Home Controller");
    var loggedUser = UserState.getUserState();
    if(loggedUser) {
      $scope.isLoggedIn = true;
      $scope.username = loggedUser.username;
    }
    else {
      $scope.isLoggedIn = false;
    }
  }

  angular.module("BlogSystem.controllers")
    .controller("HomeController", ["$scope", "UserState", HomeController]);
})();
