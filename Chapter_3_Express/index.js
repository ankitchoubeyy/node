const express = require("express");
const fs = require("fs");

const app = express();

const PORT = 8000;

//! writing custom application level middlewares
app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
})

//! writing a router level middleware
const auth = (req, res, next) => {
    console.log(req.query.user);
    if(req.query.user === "ankit") {
        next();
    }
    else{
        res.status(401).send("Unauthorized");
    }
}


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


//! APIs
app.post("/api", (req, res) => {
    res.json({"type":"Get"})
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
