var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var teste4 = require("./teste4");
var teste5 = require("./teste5");
const { default: SessionsController } = require('./src/controllers/sessionsController');
const { default: UsersController } = require('./src/controllers/usersController');
var ensureAuthenticated = require("./src/infra/http/middleware/ensureAuthenticated")

app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

const sessionsController = new SessionsController();
const usersController = new UsersController();

app.get("/users", usersController.listAllUsers);
app.get("/user", usersController.getUserByName);
app.get("/usersByName", usersController.getUsersByName);
app.post("/users", usersController.create)
app.delete("/users", ensureAuthenticated, usersController.deleteUser)
app.put("/users", ensureAuthenticated, teste4)
app.get("/users/access", teste5);
app.post("/sessions", sessionsController.create);


const port  = 3333;
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});