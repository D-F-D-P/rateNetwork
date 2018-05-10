const mongoose = require('mongoose');
const { Connection } = require('./connections');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let schema = mongoose.Schema({
	name: String,
	password: String,
	token: Object,
	socketId: String
},{collection: 'users'})

schema.statics.getActiveFollwers = function (id) {
	let User = this;
	id = mongoose.Types.ObjectId(id);
	return Connection.aggregate([
		{
			$match: {
				to : id
			}
		},
		{
		   $lookup:
		     {
		       from: 'users',
		       localField: 'from',
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
			$project: {
				_id:0,
				"_id": "$results._id"
			}
		}
	]).then(r=>r.map(e=>e._id));
}

schema.statics.verifyAuthToken = async function (token) {
	let User = this;
	let decoded = jwt.verify(token, 'config.secret');
    return User.findOne({
      _id: decoded._id,
      token: token
    }).then((result)=>{
    	if(result == null)throw new Error();
    	return result
  	})
}

schema.statics.login = async function (user_name, password) {
	debugger;
	let User = this;
	let userResult = await User.findOne({ name: user_name }).exec();
	if (userResult === null) throw new Error("invalid email or password");
	if (bcrypt.compareSync(password, userResult.password)) {
	  return await userResult.generateAuthToken();
	}
	throw new Error("invalid email or password");
}

schema.methods.generateAuthToken = function () {
  const User = this;
  let authToken = jwt.sign({
    _id: User.id
  },'config.secret');
  User.token = authToken;
  return User.save()
    .then(() => authToken);
};


schema.statics.updateManyPromised = function(criteria, update){
		return new Promise((resolve, reject)=>{
			this.updateMany(criteria, update, (err, res)=>{
					if (err) {
						reject(err);
					}else{
						resolve(res);
					}
			})
		});
}

schema.statics.follow = function(id1, id2){
	let User = this;
	return Connection.find({from: mongoose.Types.ObjectId(id1), to: mongoose.Types.ObjectId(id2)})
		.then((res)=>{
			if(res.length == 0){
				let temp = new Connection({
					from: mongoose.Types.ObjectId(id1),
					to: mongoose.Types.ObjectId(id2)
				});
				return temp.save();
			}
			throw new Error('connection already exists');
		})
};

schema.statics.unfollow = function(id1, id2){
	let User = this;
	return Connection.find({from: mongoose.Types.ObjectId(id1), to: mongoose.Types.ObjectId(id2)})
		.then((res)=>{
			if(res.length != 0){
				return res[0].remove();
			}
			throw new Error('connection doesn\'t exists');
		})
};

schema.statics.suggested_friends = function (id){
	let User = this;
	let steps = [
		{
			$sample: {
				size: 3
			} 
		},
		{
		  $lookup:
		     {
		       from: "connections",
		       let: { localId: "$to" },
		       pipeline: [
			          { 
			          		$match:
				            { 
				            	$expr: { $eq: [ "$from",  "$$localId" ] }
					            
				            }
			          },
			          {
						$sample: {
							size: 3
						} 
					},
		            {
					  $lookup:
					     {
					       from: "connections",
					       let: { localId: "$to" },
					       pipeline: [
					          { 
					          		$match:
						            { 
						            	$expr: 
						            	{ 
						            		$and:
						                       [
						                         { $eq: [ "$to",  "$$localId" ] },
						                         { $eq: [ "$from",  mongoose.Types.ObjectId(id) ] }
						                       ]
					                    }
							            
						            }
					          }
					       ],
					       as: "results"
					     }
					},
					{
						$addFields: {
							'flag': {$size: "$results"}
						}
					},
					{
						$project: {
							'results': 0
						}
					},
					{
						$match: {
							"flag": 0
						}
					},
					{
						$project:{
							"flag": 0
						}
					}
		       ],
		       as: "results"
		     }
		},
		{
			$addFields: {
				'flag': {$size: "$results"}
			}
		},
		{
			$match: {
				"flag": {$ne: 0}
			}
		},
		{
			$project:{
				"_id": 0,
				results: 1
			}
		},
		{
			$unwind:"$results"
		},
		{
			$project:{
				"_id": "$results.to"
			}
		},
		{
		   $lookup:
		     {
		       from: 'users',
		       localField: '_id',
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
			$project: {
				_id:0,
				"_id": "$results._id",
				"name": "$results.name"
			}
		}
	];
	let s1 = steps.slice();
	s1.unshift({
		$match: {
			from : mongoose.Types.ObjectId(id)
		}
	});
	return Connection.aggregate(s1).then((results)=>{
		if (results.length <= 3) {
			console.log(12);
			return Connection.aggregate(steps);
		}else{
			return results;
		}
	});
}

schema.statics.following_list = function (id){
	let User = this;
	return Connection.aggregate([
		{
			$match: {
				from : mongoose.Types.ObjectId(id)
			}
		},
		{
		   $lookup:
		     {
		       from: 'users',
		       localField: 'to',
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
			$project: {
				_id:0,
				"_id": "$results._id",
				"name": "$results.name"
			}
		}
	]);
}

schema.statics.followers_list = function (id){
	let User = this;
	return Connection.aggregate([
		{
			$match: {
				to : mongoose.Types.ObjectId(id)
			}
		},
		{
		   $lookup:
		     {
		       from: 'users',
		       localField: 'from',
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
			$project: {
				_id:0,
				"_id": "$results._id",
				"name": "$results.name"
			}
		}
	]);
}

const User = mongoose.model('user', schema);

module.exports = {
	User: User
}