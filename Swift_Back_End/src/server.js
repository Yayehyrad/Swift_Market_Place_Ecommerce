const http = require("http");
const { app } = require("./app");

const Port = 3000;

// connecting the srver to the express app good for testing + Logging and socket
server = http.createServer(app);

server.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
