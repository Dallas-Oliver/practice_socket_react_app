const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const port = 4001;

const app = express();
const server = http.createServer(app);

const io = socketIO(server);

io.on("connection", socket => {
  console.log("user connected");

  socket.on("change_color", color => {
    console.log(`color changed to ${color}`);
    io.sockets.emit("change_color", color);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(port, () => console.log(`listening on ${port}`));
