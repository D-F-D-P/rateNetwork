const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground');
mongoose.Promise = global.Promise;
const { User } = require('./models/user');
const { Connection } = require('./models/connections');

// User.follow("5af31ab8cb33c516f0add6bc","5af31adfcb33c516f0add6bf").then((r)=>{
// 	console.log(r);
// }).catch((e)=>{
// 	console.log(e);
// });
// User.follow("5af31ab8cb33c516f0add6bc","5af31c5dcb33c516f0add756").then((r)=>{
// 	console.log(r);
// }).catch((e)=>{
// 	console.log(e);
// });
// User.follow("5af31adfcb33c516f0add6bf","5af32f8bcb33c516f0ade39e").then((r)=>{
// 	console.log(r);
// }).catch((e)=>{
// 	console.log(e);
// });


User.suggested_friends("5af31ab8cb33c516f0add6bc").then((r)=>{
		console.log(JSON.stringify(r,null,2));
	}).catch((e)=>{
		console.log(e);
	});
