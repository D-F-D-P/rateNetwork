const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground');
mongoose.Promise = global.Promise;
const { User } = require('./models/user');
const { Post } = require('./models/posts');
const { Activity } = require('./models/activities');
const { Connection } = require('./models/connections');
require('app-module-path')
  .addPath(__dirname);
const express = require('express');
const app = express();
const server = require('http')
  .Server(app);
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

//socket io
const io = require('socket.io')(server);
app.set('io', io);
const { sockets, notify } = require('./socketsApi')(io);
io.on('connection', function(socket) {
  let token = socket.handshake.query.token;
  User.verifyAuthToken(token).then((user)=>{
    sockets[user._id] = socket.id;
    console.log(sockets);
    User.getActiveFollwers(user._id).then((ids)=>{
      notify([ids], user.name + " is active now !", 'log');
    });
    socket.on('disconnect', function(data) {
      delete sockets[user._id];
      console.log(sockets);
    });
  }).catch(e=>console.log(e))
});
// to get the correct ip after nginx proxy
app.set('trust proxy', true);

// cors middleware
app.use(cors());

// parse request body
app.use(bodyParser.json());
// stay with the query string form not qs
app.use(bodyParser.urlencoded({
  extended: false
}));

// express static folder (public)
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.setHeader("x-access-token", "*");
    return next();
  });



app.post('/login', function (req, res) {
  User.login(req.body.user_name, req.body.password).then((r)=>{
    res.json({
      token: r
    })
  }).catch((r)=>{
    res.json({
      errorMessage: "invalid user_name or password"
    })
  })
})

// port for the server
const port = process.env.PORT || 3000;
// listen to the port and logging verifying msg
server.listen(port, () => {
  console.log(`server started on port: ${port} @ ${new Date().toISOString()}`);
});

module.exports = server;