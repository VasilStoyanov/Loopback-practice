module.exports = function(server) {
  var router = server.loopback.Router();
  var path = require("path");
  var User = server.loopback.User;

  router.get("/*", function homePage(req, res) {
    res.sendFile(path.join(__dirname + "../../../client/html/home.html"));
  });

  router.post("/login", function postsPage(req, res) {
    User.login(req.body, "user", function(error, token) {
      if(error) {
        console.log("ERROR");
        res.status(error.statusCode);
        res.end(JSON.stringify(error));
        return;
      }

      console.log(req.body.username + " Logged");
      res.send(token);
      res.end();
    })
  });

  router.post("/register",
    function newAccount(req, res) {
      var newUser = {
        username: req.body.userName,
        email: req.body.userEmail,
        password: req.body.userPassword,
        //TODO: Delete the toString method, its inteded for testing
        toString: function () {
          return this.userName + "|" + this.email + "|" + this.password;
        }
      }

      User.create(newUser, function(error, user) {
        if(error) {
          console.log(error);
          res.end(JSON.stringify(error));
        }
        else {
          console.log("Created: " + newUser);
          res.redirect("/");
        }
      });
    });

  server.use(router);
};
