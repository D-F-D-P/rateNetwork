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


app.post('/api/login', function (req, res) {
  User.login(req.body.user_name, req.body.password).then((r)=>{
    res.json(r)
  }).catch((r)=>{
    res.json({
      errorMessage: "invalid user_name or password"
    })
  })
})

let authenticate = ((req, res, next)=>{
  let token = req.body.token || req.query.token || req.headers['x-access-token'];
  User.verifyAuthToken(token).then((r)=>{
    req.user = r;
    next();
  })
})

app.get('/api/profile', authenticate, function (req, res) {
  req.user.getProfile(req.query.id).then((r)=>{
    debugger;
    res.json(r);
  }).catch((r)=>{
    res.json({
      errorMessage: "can't find profile"
    })
  })
})

app.get('/api/suggestedFriends', authenticate, function (req, res) {
  User.suggested_friends(req.user._id).then((r)=>{
    res.json(r)
  }).catch((r)=>{
    res.json({
      errorMessage: "can't find suggestedFriends"
    })
  })
})

app.post('/api/follow', authenticate, function (req, res) {
  if (req.body.id) {
      User.follow(req.user._id.toString(), req.body.id).then((r)=>{
        res.json({success: true});
        User.findOne({_id: req.body.id}).then((r)=>{
          User.getActiveFollwers(req.user._id).then((ids)=>{
            ids = ids.filter(id=>id.toString()!=r._id.toString());
            notify([ids], req.user.name + " has followed " + r.name + " !", 'log');
          });
          User.getActiveFollwers(r._id.toString()).then((ids)=>{
            ids = ids.filter(id=>id.toString()!=r._id.toString());
            notify([ids], req.user.name + " has followed " + r.name + " !", 'log');
          });
        })
        notify([r._id.toString()], req.user.name + " has followed you !", 'notification');
    }).catch((r)=>{
      res.json({
        errorMessage: "can't follow"
      })
    })
  }
})

app.post('/api/unfollow', authenticate, function (req, res) {
  if (req.body.id) {
    User.unfollow(req.user._id.toString(), req.body.id).then((r)=>{
        res.json({success: true});
    }).catch((r)=>{
      res.json({
        errorMessage: "can't unfollow"
      })
    })
  }
})

app.post('/api/post/add', authenticate, function (req, res) {
  if (req.body.body) {
    let post = new Post;
    post.body = req.body.body;
    post.user_id =  req.user._id;
    post.parent = null;
    post.date = new Date();
    post.save().then(()=>{
      res.json({success: true});
      debugger;
      User.getActiveFollwers(req.user._id).then((ids)=>{
          debugger;
          notify([ids], req.user.name + " has added new post !", 'log');
        });
    });
  }
})

app.post('/api/post/remove', authenticate, function (req, res) {
  if (req.body.id) {
    Post.remove({_id: req.body.id, user_id: req.user._id}).then(()=>{
      res.json({success: true});
    });
  }
})

app.post('/api/post/share', authenticate, function (req, res) {
  if (req.body.id) {
    let post = new Post;
    post.user_id = req.user._id;
    post.parent = mongoose.Types.ObjectId(req.body.id);
    post.date = new Date();
    post.save(()=>{
      res.json({success: true});
      Post.aggregate([
          {
            $match: {
              _id: mongoose.Types.ObjectId(req.body.id)
            }
          },
          {
             $lookup:
               {
                 from: 'users',
                 localField: 'user_id',
                 foreignField: '_id',
                 as: 'results'
               }
          },
          {
            $addFields: {
              'results': {$arrayElemAt: [ "$results", 0 ]}
            }
          },
          {
            $addFields: {
              "name": "$results.name"
            }
          },
          {
            $project: {
              results:0,
            }
          }
        ]).then((r)=>{
        r = r && r[0];
        User.getActiveFollwers(req.user._id).then((ids)=>{
          ids = ids.filter(id=>id.toString()!=r.user_id.toString());
          notify([ids], req.user.name + " has shared " + r.name + "'s post !", 'log');
        });
        User.getActiveFollwers(r.user_id.toString()).then((ids)=>{
          ids = ids.filter(id=>id.toString()!=r.user_id.toString());
          notify([ids], req.user.name + " has shared " + r.name + "'s post !", 'log');
        });
        notify([r.user_id.toString()], req.user.name + " has shared your post !", 'notification');
      })
    });
  }
})

app.post('/api/post/comment', authenticate, function (req, res) {
  if (req.body.id && req.body.body) {
    Activity.comment(req.user._id, req.body.id, req.body.body).then(()=>{
      res.json({success: true});
      Post.aggregate([
          {
            $match: {
              _id: mongoose.Types.ObjectId(req.body.id)
            }
          },
          {
             $lookup:
               {
                 from: 'users',
                 localField: 'user_id',
                 foreignField: '_id',
                 as: 'results'
               }
          },
          {
            $addFields: {
              'results': {$arrayElemAt: [ "$results", 0 ]}
            }
          },
          {
            $addFields: {
              "name": "$results.name"
            }
          },
          {
            $project: {
              results:0,
            }
          }
        ]).then((r)=>{
        r = r && r[0];
        User.getActiveFollwers(req.user._id).then((ids)=>{
          ids = ids.filter(id=>id.toString()!=r.user_id.toString());
          notify([ids], req.user.name + " has commented on " + r.name + "'s post !", 'log');
        });
        User.getActiveFollwers(r.user_id.toString()).then((ids)=>{
          ids = ids.filter(id=>id.toString()!=r.user_id.toString());
          notify([ids], req.user.name + " has commented on " + r.name + "'s post !", 'log');
        });
        notify([r.user_id.toString()], req.user.name + " has commented on your post !", 'notification');
      })
    });
  }
})

app.post('/api/post/rate', authenticate, function (req, res) {
  if (req.body.id && req.body.rate) {
    Activity.rate(req.user._id, req.body.id, req.body.rate).then(()=>{
      res.json({success: true});
      Post.aggregate([
          {
            $match: {
              _id: mongoose.Types.ObjectId(req.body.id)
            }
          },
          {
             $lookup:
               {
                 from: 'users',
                 localField: 'user_id',
                 foreignField: '_id',
                 as: 'results'
               }
          },
          {
            $addFields: {
              'results': {$arrayElemAt: [ "$results", 0 ]}
            }
          },
          {
            $addFields: {
              "name": "$results.name"
            }
          },
          {
            $project: {
              results:0,
            }
          }
        ]).then((r)=>{
        r = r && r[0];
        User.getActiveFollwers(req.user._id).then((ids)=>{
          ids = ids.filter(id=>id.toString()!=r.user_id.toString());
          notify([ids], req.user.name + " has rated " + r.name + "'s post !", 'log');
        });
        User.getActiveFollwers(r.user_id.toString()).then((ids)=>{
          notify([ids], req.user.name + " has rated " + r.name + "'s post !", 'log');
        });
        notify([r.user_id.toString()], req.user.name + " has rated your post !", 'notification');
      })
    });
  }
})

app.post('/api/post/unrate', authenticate, function (req, res) {
  if (req.body.id) {
    Activity.rate(req.user._id, req.body.id).then(()=>{
      res.json({success: true});
    });
  }
})

app.post('/api/post/comment/remove', authenticate, function (req, res) {
  if (req.body.id) {
    Activity.remove({_id: req.body.id, user_id: req.user._id}).then(()=>{
      res.json({success: true});
    });
  }
})

// frontend Router
app.use('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// port for the server
const port = process.env.PORT || 3000;
// listen to the port and logging verifying msg
server.listen(port, () => {
  console.log(`server started on port: ${port} @ ${new Date().toISOString()}`);
});

module.exports = server;