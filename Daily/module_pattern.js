
//Module Pattern

var repo = function(){

	var getId = function(id) {
		console.log("Getting new Id: "+id+" using Module");

	}

	var getAll = function() {
		console.log("Getting All records using Module");

	}

	var save = function() {
		console.log("Saving new file using Module");

	}

	return {
		getAll : getAll,
		getId : getId,
		save :save
	}

}


