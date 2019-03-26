io.on("connect", socket => {
	socket.emit("initialize", {
		message: [1, 1, 1, 0, 0, 0, 1, 1, 1]
	});

	socket.on("update", data => {
		console.log(data)
	});


});
