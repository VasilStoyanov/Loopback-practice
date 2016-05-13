(function() {
  "use strict"

  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "iindex.html",
        controller: "HomeController"
      })
      .when("/login", {
        templateUrl: "login.html",
        controller: "LoginController"
      })
      .otherwise({
        templateUrl: "iindex.html",
        controller: "HomeController"
      });

    $locationProvider.html5Mode(true);
  }

  angular.module("BlogSystem.services", []);
  angular.module("BlogSystem.controllers", ["BlogSystem.services"]);
  angular.module("BlogSystem", ["ngRoute", "BlogSystem.controllers"])
    .config(["$routeProvider", "$locationProvider", config]);

})();
