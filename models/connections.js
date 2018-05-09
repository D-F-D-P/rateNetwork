const mongoose = require('mongoose');

let schema = mongoose.Schema({
	from: Object,
	to: Object
},{collection: 'connections'})

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

const Connection = mongoose.model('Connection', schema);

module.exports = {
	Connection: Connection
}