function callback (err, data) {
    for( i in data ){
	if (data[i].match(new RegExp("\\."+process.argv[3]+"$")))
	    console.log(data[i]);
    }
};

var fs = require("fs");

fs.readdir(process.argv[2], callback);

