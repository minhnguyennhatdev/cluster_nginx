const { App } = require("uWebSockets.js");
const { Server } = require("socket.io");

const port = process.env.PORT || 3000;

const app = new App();
const io = new Server();

io.attachApp(app);

io.on("connection", (socket) => {
  socket.on("getMessage", (msg) => {
    socket.emit('sendMessage', `from server: ${msg}`);
  });
});

app.listen(port, (token) => {
  if (!token) {
    console.warn("port already in use");
  }
});