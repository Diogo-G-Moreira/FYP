var io = require('socket.io-client');
var ss = require('socket.io-stream');
var fs = require('fs');


var socket = io.connect('http://localhost:3000');
var stream = ss.createStream();
var filename = 'frank.mp3';
socket.on("connect",function(){
	console.log("connected");
});
ss(socket).emit('sendFile', stream, {name: filename});
console.log("gets here?");
stream.pipe(fs.createWriteStream(filename));
