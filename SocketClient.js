module.exports = {
  client: function (song) {

var io = require('socket.io-client');
var ss = require('socket.io-stream');
var fs = require('fs');

var socket = io.connect('http://178.62.122.105:3000');
var stream = ss.createStream();
var filename = song;



socket.on("connect",function(){
	console.log("Connected");

	ss(socket).emit('sendFile', stream, {name: filename});
	stream.pipe(fs.createWriteStream(filename));
	console.log("File Received");


});

socket.on("disconnect",function(){
	console.log("Disconnected");
	socket.disconnect();
	
});

  }};