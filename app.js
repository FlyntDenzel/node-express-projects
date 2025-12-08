const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to my homepage");
  } else if (req.url === "/about") {
    res.end("Welcome to my about page");
  } else {
    res.end(`404! There is no page found`);
  }
});

server.listen(8000);
