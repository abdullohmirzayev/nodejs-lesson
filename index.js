const http = require("http");
const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "content-Type": "text/html" });
    res.end(`
      <h2>Sent name</h2>
      <form method='post' action='/'>
        <input name='name' placeholder='Enter your email' />
        <button type='submit'>Sent name</button>
      </form>
    `);
  } else if (req.method === "POST") {
    const body = [];
    req.on("data", (data) => {
      body.push(Buffer.from(data));
    });
    req.on("end", () => {
      const message = body.toString().split("=")[1];
      res.end(`Email successfully added: ${message}`);
    });
  }
});
server.listen(3000, () => {
  console.log("Name has been started on port: 3000");
});