function bla(b){
    return function (err, data) {
	for( i in data ){
	    if (data[i].match(new RegExp("\\."+b+"$")))
		console.log(data[i]);
	}
    };
}

var fs = require("fs");

module.exports = function (a, b){
    fs.readdir(a, bla(b))
}








