const mongoose = require('mongoose');

let schema = mongoose.Schema({
	body: String,
	user_id: Object,
	parent: Object,
	date: Date
},{collection: 'posts'})


schema.statics.getPosts = function(id, profile)
{
	let Post = this;
	id = mongoose.Types.ObjectId(id);
	let s = [
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
		},
		{
		  $lookup:
		     {
		       from: "posts",
		       let: { localId: "$parent" },
		       pipeline: [
			          { 
			          		$match:
				            { 
				            	$expr: { $eq: [ "$_id",  "$$localId" ] }
					            
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
			    ],
			    as: "results"
			}
		},
		{
			$addFields: {
				'results': {$arrayElemAt: [ "$results", 0 ]}
			}
		},
		{
		  $lookup:
		     {
		       from: "posts",
		       let: { localId: "$_id" },
		       pipeline: [
		       		{ 
						$match:
						    { 
						    	$expr: { $eq: [ "$parent",  "$$localId" ] }
						        
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
							_id:0,
							user_id:1,
							name:1,
							date:1
						}
					}
		       ],
		       as: "shares"
		   }
		},
		{
		  $lookup:
		     {
		       from: "activities",
		       let: { localId: "$_id" },
		       pipeline: [
		       		{ 
						$match:
						    { 
						    	$expr: { $eq: [ "$post_id",  "$$localId" ] }
						        
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
							_id:0,
							user_id:1,
							type:1,
							name:1,
							date:1,
							body:1
						}
					}
		       ],
		       as: "activities"
		   }
		},
		{
			$addFields: {
				likes: {
		            '$filter': {
		                input: '$activities',
		                as: 'arr',
		                cond: { $eq: ['$$arr.type', 'like'] }
		            }
				},
				comments: {
		            '$filter': {
		                input: '$activities',
		                as: 'arr',
		                cond: { $eq: ['$$arr.type', 'comment'] }
		            }
				}
			}
		},
		{
			$project:{
				"activities":0
			}
		}
	];
	if (profile) {
		s.unshift(
			{
				$match :{
					user_id : id
				}
			}
		);
	}else{
		s.unshift(
			{
				$sort : {
					date : -1
				}
			}
		);
		s.unshift(
			{
				$limit : 10
			}
		);
	}
	return Post.aggregate(s).then((results)=>{
		return results.map((e)=>{
			if(e.parent != null){
				e.shared = true;
				e.body = e.results.body;
			}else{
				e.shared = false;
			}
			return e;
		});
	})
}

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

const Post = mongoose.model('Post', schema);

module.exports = {
	Post: Post
}