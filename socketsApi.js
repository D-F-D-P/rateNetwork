var sockets = {};

var io;

let notify = function(ids, message, type){
	ids.forEach((id)=>{
		var t = sockets[id];
		if (t) {
			if (type === 'log') {
				io.to(t).emit("activityLog", message);
			}else if (type === 'notification') {
				io.to(t).emit("notification", message);
			}
		}
	});
}

let init = function(x){
	if (x) {
		io = x;
	}
	return {
		sockets,
		notify
	}
}

module.exports = init;