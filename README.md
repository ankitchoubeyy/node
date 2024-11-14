# Node
### What is Node?
- Run time enviroment, but DOM api is not there in your system.
- DOM api is only available in browser.
- Asyncronus behaviour
- Non Blocking i/o

### Is node is a web server? 
No, it is not a web server. but we can use **express** framework to create a web server.

### Why node in web server?
- To handle Heavy i/o.
- Small code footprint.
- no need to learn any extra language for backend.

---

# Chapter - 1 (Introduction)
### What is REPL?
REPL stands for Read-Eval-Print Loop. It's an interactive shell that allows you to execute JavaScript code snippets and see the results immediately. 

### How to enter in REPL mode?
When you run the node command without specifying a script, you enter the REPL mode.

Here's a quick overview of how it works:

1. **Read**: The REPL reads a line of code you enter.

2. **Eval**: It evaluates the code and executes it.

3. **Print**: The result of the code execution is printed to the console.

4. **Loop**: The process repeats, allowing you to enter more code snippets and see their results instantly.

> To close repl press: **ctrl + d**

### What is module?
In Node.js, a module is a reusable piece of code that encapsulates related functionality.

> math.js
```javascript
const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

module.exports = {
  add,
  subtract
};
```

> index.js
```javascript
const {greet} = require("./greet.js");
const {add, subtract} = require("./math.js");

greet("Ankit");
console.log(add(2,3));
console.log(subtract(2,3));
```

***Note*** : we can also use ECS for export and import usinng **"type":"module"**


### FS modules
FS : file system module.

#### Reading a file
```javascript
const fs = require("fs");

//! reading file synchronously
const text = fs.readFileSync("./text.txt","utf-8");
console.log(text);

//! reading file asynchronously
fs.readFile("./text.txt", "utf-8", (err, data)=>{
    try {
        console.log(data);
    } catch (error) {
        console.log(error);
    }
})
```

#### writing a file
```javascript
//! writing file synchronously
// fs.writeFileSync("/text1.txt","Hello Ankit");

//! writing file asynchronously
fs.writeFile("./ankit.txt", "Hello Ankit",(error, data)=>{
    try{
        console.log("File is created and data is writeen")
    }
    catch(error){
        console.log(error);
    }
})
```
---
### NPM INIT
Creating a `package.json` file using `npm init` is the first step.
> npm init OR npm init -y 

NPM : is a node package manager. which allow us to install and remove the packages.

Here, is the command to install something
```shell
npm i express or npm install express
```

#### Dependicies VS Dev Dependencies in package.json
- Dependicies is used for the our project
- Dev dependcies is only used for our devlopement purpose.

### How to install a package globally?
You can install by following command
```shell
npm install --global packageName
```
### Node.js Semantic Versioning (semver) Overview:

**Definition**: Semantic versioning manages Node.js releases using a three-part number format: `MAJOR.MINOR.PATCH`.

**Components**:
1. **MAJOR**: 
   - Incompatible API changes.
   - Requires significant code modifications.
   - Example: Change from `10.x.x` to `11.x.x`.

2. **MINOR**:
   - New, backward-compatible features/enhancements.
   - Upgrading without breaking existing functionality.
   - Example: Change from `10.1.x` to `10.2.x`.

3. **PATCH**:
   - Backward-compatible bug fixes/minor improvements.
   - Safe upgrade without breaking existing code.
   - Example: Change from `10.1.1` to `10.1.2`.

**Key Points**:
- MAJOR changes: Incompatible, significant code adjustments.
- MINOR changes: Backward-compatible new features.
- PATCH changes: Bug fixes, minor improvements.
---

# Chapter - 2 (HTTP Server)

### Clinet - Server Architecture

- **Client**:
  - Requests services/resources.
  - Examples: Web browsers, email clients.
  - Initiates communication.

- **Server**:
  - Provides services/resources.
  - Examples: Web servers, database servers.
  - Responds to requests.

**Workflow**:
1. Client sends a request (e.g., for a web page).
2. Server processes the request and sends a response.
3. Client receives the response and takes action.

**Key Points**:
- Backbone of web applications.
- Enables efficient resource management.
- Supports multiple clients accessing shared resources.

---

### Node.js Status Codes Overview:

**1xx: Informational**
- **100 Continue**: Request received, continue sending.
- **101 Switching Protocols**: Protocol switch in progress.

**2xx: Success**
- **200 OK**: Request successful.
- **201 Created**: Resource created.
- **204 No Content**: Request successful, no content.

**3xx: Redirection**
- **301 Moved Permanently**: Resource permanently moved.
- **302 Found**: Resource temporarily at different URL.
- **304 Not Modified**: Resource not modified, use cached version.

**4xx: Client Errors**
- **400 Bad Request**: Invalid request syntax.
- **401 Unauthorized**: Authentication required.
- **403 Forbidden**: Access denied.
- **404 Not Found**: Resource not found.

**5xx: Server Errors**
- **500 Internal Server Error**: Unexpected server error.
- **502 Bad Gateway**: Invalid response from upstream server.
- **503 Service Unavailable**: Server temporarily overloaded or under maintenance.

---

### How to create a HTTP Server?
```javascript
const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === "/") {
      //! Setting headers and custom headers
        res.setHeader("Content-Type", "text/html");
        res.setHeader("Page-Type", "Home");
        res.end("Welcome to our home page");
    }
    if(req.url === "/about") {
        res.end("Welcome to our about page");
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
```

**Note**: Http modules is good for understanding client-server architecture but we will use `express.js` a framwork of js to to create a server and handling all the `req` and `res`.
---

### How i can send a HTML file or .json file via server response?
```javascript
if(req.url === "/") {
  //? Setting custom headers
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Page-Type", "Home");
  res.end(index);
}
```


---
### Common HTTP Methods in Web Development:

1. `GET`: Retrieve data from the server.

2. `POST`: Send data to the server to create/update a resource.

3. `PUT`: Update an existing resource on the server.

4. `DELETE`: Delete a resource from the server.

5. `PATCH`: Partially update a resource on the server.
---
> Note : **HTTP** `req` and `res` can be tracked using browser `dev tools` ==> `network tab`.
---
# Chapter - 3 (Express.js)
