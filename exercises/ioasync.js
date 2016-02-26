


function callback (err, data) {
    var count=0;
    count+=data.split("\n").length-1;
    console.log(count);
};

var fs = require("fs");

fs.readFile(process.argv[2], "utf8", callback);

