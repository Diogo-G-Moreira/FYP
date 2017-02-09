var http = require("http");
var path = require('path');
var fs = require("fs");
var server = http.createServer();
server.listen(3000);
var io = require('socket.io')
var socketStream = require("socket.io-stream");
var ss = io.listen(server);

ss.on('connection', function(socket) {
	console.log("Connected");
  socketStream(socket).on('sendFile', function(stream, data) {
	  console.log("here");
    var filename = path.basename(data.name);
   fs.createReadStream("frank.mp3").pipe(stream);
  });
});












/*var http = require('http');
var fs = require('fs');

var server = fs.createReadStream(__dirname + "/test.txt", "utf8");
var writeStream = fs.createWriteStream(__dirname + "/test2.txt");
server.on("data", function(chunk){
	
	console.log("data received");
	writeStream.write(chunk);
	
});

*/