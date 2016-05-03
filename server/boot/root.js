module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  var path = require("path");
  var User = server.loopback.User;

  router.get("/", function homePage(req, res) {
    res.sendFile(path.join(__dirname, "../../client/html/index.html"));
  });

  router.get("/post", function postsPage(req, res) {
    res.sendFile(path.join(__dirname, "../../client/html/login.html"));
  });

  router.get("/register", function postsPage(req, res) {
    res.sendFile(path.join(__dirname, "../../client/html/register.html"));
  });

  router.get("/login", function postsPage(req, res) {
    res.sendFile(path.join(__dirname, "../../client/html/login.html"));
  });

  router.post("/login", function postsPage(req, res) {
    User.login(req.body, "user", function(error, token) {
      if(error) {
        res.end(error);
        return;
      }

      console.log(token);
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
