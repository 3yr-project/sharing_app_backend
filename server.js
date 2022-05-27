const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });
const cors = require("cors")
app.use(cors());
app.get("/", (req, res) => {
	res.send("hello");
})
/* io.on("connection", function (socket) {
	socket.on("sender-join", function (data) {
		socket.join(data.uid);
	});
	socket.on("receiver-join", function (data) {
		socket.join(data.uid);
		socket.in(data.sender_uid).emit("init", data.uid);
	});
	socket.on("file-meta", function (data) {
		socket.in(data.uid).emit("fs-meta", data.metadata);
	});
	socket.on("fs-start", function (data) {
		socket.in(data.uid).emit("fs-share", {});
	});
	socket.on("file-raw", function (data) {
		socket.in(data.uid).emit("fs-share", data.buffer);
	})
}); */

app.listen(5000, () => {
	console.log("Server is Running");
});