const express = require('express');
const app = express();

const server = app.listen(3011);
const io = require('socket.io')(server);

io.on('connection',  (socket) => {
	console.log('Connecteed succesfully', socket.id);

	socket.on('disconnect', () => {
	console.log("Disconnected", socket.id);
	})

	socket.on('press', (data) => {
	//console.log(data)
	socket.broadcast.emit("press",data)
	})

	socket.on('led1', (data) => { 
	console.log(data)
	socket.broadcast.emit("led1", data)
	})
})
