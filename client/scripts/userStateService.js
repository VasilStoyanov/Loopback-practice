(function () {
  "use strict"

  function UserState() {
    var user = undefined;

    return {
      getUserState: function() {
        return (user) ? user : false;
      },
      setUserState: function(state) {
        user = state;
      }
    };
  }

  angular.module("BlogSystem.services")
    .factory("UserState", UserState);
})();
