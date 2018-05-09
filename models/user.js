const mongoose = require('mongoose');
const { Connection } = require('./connections');

let schema = mongoose.Schema({
	name: String
},{collection: 'users'})

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