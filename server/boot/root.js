module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  var path = require("path");
  var User = server.loopback.User;

  router.get("/", function homePage(req, res) {
    res.sendFile(path.join(__dirname, "../../client/html/index.html"));
  });

  router.get("/post", function postsPage(req, res) {
    res.sendFile(path.join(__dirname, "../../client/html/post.html"));
  });

  router.get("/register", function postsPage(req, res) {
    res.sendFile(path.join(__dirname, "../../client/html/register.html"));
  });

  router.post("/register",
    function newAccount(req, res) {
      var newUser = {
        username: req.body.userName,
        email: req.body.userEmail,
        password: req.body.userPassword,
        toString: function () {
          return this.userName + "|" + this.email + "|" + this.password;
        }
      }

      User.create(newUser, function(error, user) {
        if(error) {
          console.log(error);
        }
        else {
          console.log("Created: " + user);
        }
      });

      res.redirect("/");
    });

  server.use(router);
};
