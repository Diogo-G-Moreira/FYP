var io = require('socket.io-client');
var ss = require('socket.io-stream');
var fs = require('fs');


var socket = io.connect('http://localhost:3000');
var stream = ss.createStream();
var filename = 'frank.mp3';

socket.on("connect",function(){
	console.log("Connected");


	ss(socket).emit('sendFile', stream, {name: filename});
	stream.pipe(fs.createWriteStream(filename));
	console.log("File Received");

});

socket.on("disconnect",function(){
	
	socket.disconnect();
	console.log("Disconnected");
});


