import * as http from 'http';

const server = http.createServer((req, res) => {
  if (req.url === '/hello' && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "hello yourself" }));
    res.end();
  } else if (req.url === '/oi' && req.method === 'POST') {
    let body = "";
    req.on("data", (chunk) => { body += chunk.toString(); })
    req.on("end", () => { console.log(body); });
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "Ta!" }));
    res.end();
  } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Route not found" }));
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});