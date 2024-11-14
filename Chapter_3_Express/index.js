const express = require("express");
const morgan = require("morgan");
const fs = require("fs");

const app = express();

const PORT = 8000;

//? ----------------- Middlewares -----------------
//! writing third party middlewares
app.use(morgan("dev"));

//! writing built in middlewares
app.use(express.json()); //parses incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true })); // parse incoming req with url-encoded payloads
app.use(express.static("public"));

//! writing custom application level middlewares
app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
})

//! writing a router level middleware
const auth = (req, res, next) => {
    console.log(req.body.password);
    if(req.body.password === 123) {
        next();
    }
    else{
        res.status(401).send("Unauthorized");
    }
}



//? ----------------- Routes -----------------

//! home route
app.get("/", auth, (req, res) => {
  res.end("Hello");
});

//! express route
app.get("/express", (req, res) => {
  const index = fs.createReadStream("./index.html", "utf-8").pipe(res);
});

//! Data route
app.get("/data", (req, res) => {
  fs.readFile("data.json", "utf-8", (error, data) => {
    if (error) {
      console.error("Error reading the file:", error);
      res.status(500).json({ message: "Internal server error" });
      return;
    }
    console.log("File is successfully read.");
    res.json(JSON.parse(data));
  });
});

//? ----------------- APIs -----------------
//! APIs
app.post("/api", auth, (req, res) => {
    res.json({"type":"post"});
})
app.patch("/api", (req, res) => {
    res.json({"type":"patch"})
})
app.delete("/api", (req, res) => {
    res.json({"type":"delete"})
})
app.put("/api", (req, res) => {
    res.json({"type":"put"})
})

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
