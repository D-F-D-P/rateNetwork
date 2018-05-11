const mongoose = require('mongoose');

let schema = mongoose.Schema({
	date: Date,
	type: String,
	post_id: Object,
	user_id: Object,
    body: String,
    value: float
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

schema.statics.rate = function (user_id, post_id,value)
{
	user_id = mongoose.Types.ObjectId(user_id);
	post_id = mongoose.Types.ObjectId(post_id);
    let Activity = this;
    Activity.remove({ user_id, post_id, type: "rate"});
    let temp = new Activity({ user_id, post_id, date: new Date(), value, type: "rate" });
    return temp.save();
}

schema.statics.unrate = function (user_id, post_id)
{
	user_id = mongoose.Types.ObjectId(user_id);
	post_id = mongoose.Types.ObjectId(post_id);
	let Activity = this;
    return Activity.remove({ user_id, post_id, type: "rate"});
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