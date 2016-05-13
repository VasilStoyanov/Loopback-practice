(function() {
  "use strict"

  function loginController($scope, $http, $location, UserState) {
    //TODO: Remove
    console.log("hello from login controller");
    $scope.user = {};
    $scope.login = login;

    function login() {
      console.log($scope.user);

      $http({
          method: "POST",
          url: "http://localhost:3000/login",
          data: $scope.user,
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(function successCallback(response) {
          console.log(response);
          UserState.setUserState($scope.user);
          localStorage.setItem("AUTH:", JSON.stringify(response.data.id));
          $location.path("/");
        }, function errorCallback(response) {
          console.log(response.data.code);
        });
    }
  }

  angular.module("BlogSystem")
    .controller("LoginController",
      ["$scope", "$http", "$location", "UserState", loginController]);
})();
