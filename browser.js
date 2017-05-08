var fs = require("fs");
var http = require("http");
var url = require("url");
var streamFile = require('./SocketClient.js');
var song = {};
var count = 0;
var pythonshell = require('python-shell');
var sleep = require('system-sleep');

function handleRequest(request, response){
	
	if (count == 0)
	{
	count += 1;
	pythonshell.run('tsharkScript.py', function (err) {
	if (err) throw err;
	});
sleep(4000);
	var url_parts = url.parse(request.url, true);
	var query = url_parts.query;
	console.log(query.song);


	streamFile.client(query.song);  
	console.log("here");
response.writeHead(301, {Location: "http://localhost:8080/View2.html?song="+query.song});



sleep(1000);
console.log("Ends here");
    response.end();
	}

	
	
}
var server = http.createServer(handleRequest);
server.listen(8888, function(){
    //Callback triggered when server is successfully listening. 
    console.log("Listening to server on 8888...");
});
