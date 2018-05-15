const mongoose = require('mongoose');

let schema = mongoose.Schema({
	date: Date,
	type: String,
	post_id: Object,
	user_id: Object,
    body: String,
    value: Number
},{collection: 'activities'})

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

schema.statics.like = function (user_id, post_id)
{
	user_id = mongoose.Types.ObjectId(user_id);
	post_id = mongoose.Types.ObjectId(post_id);
    let Activity = this;
    return Activity.remove({ user_id, post_id, type: "like"}).then(()=>{
	    let temp = new Activity({ user_id, post_id, date: new Date(), type: "like" });
	    return temp.save();
    });
}

schema.statics.unlike = function (user_id, post_id)
{
	user_id = mongoose.Types.ObjectId(user_id);
	post_id = mongoose.Types.ObjectId(post_id);
	let Activity = this;
    return Activity.remove({ user_id, post_id, type: "like"});
}

schema.statics.comment = function (user_id, post_id, body)
{
	user_id = mongoose.Types.ObjectId(user_id);
	post_id = mongoose.Types.ObjectId(post_id);
	let Activity = this;	
	let temp = new Activity({user_id,post_id,date: new Date(),body,type: "comment"});
	return temp.save();
}

const Activity = mongoose.model('Activity', schema);

module.exports = {
	Activity: Activity
}