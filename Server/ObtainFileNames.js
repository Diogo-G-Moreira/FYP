var fs = require("fs");
var dir = require("node-dir");

fs.realpath(__dirname+"/Music", function(err, path){
	
	if(err)
	{
		console.log(err);
		return;
	}
	console.log("Path is: "+path);
	
});

dir.files(__dirname+"/Music", function(err, files) {
    if (err) throw err;
    console.log(files);
	return files;
});