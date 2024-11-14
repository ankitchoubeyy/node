const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("./index.html", "utf-8");
const data = fs.readFileSync("./data.json", "utf-8");

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        //? Setting custom headers
        res.setHeader("Content-Type", "text/html");
        res.setHeader("Page-Type", "Home");
        res.end(index);
    }
    if(req.url === "/data") {
        res.end(JSON.stringify(data));
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
    `)
})

server.listen(8000, () => {
    console.log(`Server is listening on port 8000...`);
})
