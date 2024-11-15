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
> Note: Http modules is good for understanding client-server architecture but we will use `express.js` a framwork of js to to create a server and handling all the `req` and `res`.

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

### What is postman?

- **Postman**: A collaboration platform for API development, providing tools for testing, documentation, monitoring, and managing APIs.

**Key Features**:
1. **API Testing**:
   - Sends requests and validates responses.
   - Supports various HTTP methods.
   - Allows testing with different environments and data sets.

2. **API Documentation**:
   - Auto-generates and shares API documentation.

3. **API Monitoring**:
   - Continuously monitors API performance.
   - Sends alerts for issues.

4. **Collaborative Workspaces**:
   - Facilitates teamwork with shared projects.
   - Includes version control and history tracking.

**Benefits**:
- **Ease of Use**: User-friendly interface.
- **Efficiency**: Streamlines development and testing.
- **Collaboration**: Enhances teamwork.
- **Documentation**: Comprehensive and up-to-date API docs.
- **Monitoring**: Ensures API reliability and performance.

# Chapter - 3 (Express.js)

### What is Express.js  and its Advantages?

- **Express.js**: A fast, unopinionated, and minimalist web framework for Node.js, used to build web applications and APIs.

**Advantages**:
1. **Simplified Routing**:
   - Easy and intuitive route definitions.
   - Modular route handling.

2. **Middleware Support**:
   - Integrates middleware for request, response, and error handling.
   - Customizes the request-response cycle.

3. **Flexibility**:
   - Unopinionated design for custom structures.
   - Compatible with various template engines and databases.

4. **Robust Ecosystem**:
   - Extensive plugins and middleware via npm.
   - Strong community support.

5. **Efficient Development**:
   - Built-in features streamline development.
   - Reduces boilerplate code.

6. **Scalability**:
   - Supports scalable applications.
   - Suitable for small and large projects.

7. **Ease of Integration**:
   - Easily integrates with other Node.js frameworks.
   - Simplifies the development of RESTful APIs.
---

### How to create server using `Express.js` ?
> npm install express

To create a server using the following code:
```javascript
const express = require("express");

const app = express();

const PORT = 8000;

app.get("/", (req, res)=> {
    res.end("Hello");
})

app.listen(PORT, ()=> {
    console.log(`Server is running at ${PORT}`)
});
```
---

### How to read file in express?
```javascript
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
```
---
### Middleware
**Middleware**: is a Functions in a web application that process requests and responses. They operate between the client request and the server's final response.

**Key Features**:
1. **Request Handling**:
   - Intercepts and processes incoming requests.
   - Modifies request objects before they reach the route handlers.

2. **Response Handling**:
   - Intercepts and processes outgoing responses.
   - Modifies response objects before they are sent to the client.

3. **Next Function**:
   - Calls `next()` to pass control to the next middleware function.
   - Chain multiple middleware functions together.

4. **Types of Middleware**:
   - **Application-Level Middleware**: Applied to the app instance.
   - **Router-Level Middleware**: Applied to specific routes.
   - **Built-In Middleware**: Provided by frameworks like Express.js (e.g., `express.json()`).
   - **Third-Party Middleware**: Installed via npm (e.g., `body-parser`, `morgan`).

5. **Common Uses**:
   - Authentication and authorization.
   - Logging and debugging.
   - Parsing request bodies (e.g., JSON, URL-encoded data).
   - Handling errors and exceptions.

**Benefits**:
- Enhances modularity and maintainability.
- Facilitates code reuse and separation of concerns.
- Streamlines request/response processing.

### writing custom application level middleware
```javascript
//! writing custom application level middlewares
app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
})
```
### writing a router level middleware
```javascript
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
app.use(auth);
```

But we can also use apply it on particualar route.
```js
//! home route
app.get("/", auth, (req, res) => {
  res.end("Hello");
});
```

### Built-In Middleware in Express.js
1. **express.json()**:
   - Parses incoming requests with JSON payloads.
   - A JSON payload refers to the data format used to send information between a client and a server in JSON format.
   - Available from Express 4.16.0 onwards.

2. **express.urlencoded()**:
   - Parses incoming requests with URL-encoded payloads.
   - Supports both `extended` and `simple` modes.
   - Available from Express 4.16.0 onwards.

3. **express.static()**:
   - Serves static files such as HTML, CSS, images, and JavaScript.
   - Configures one or more directories as static assets.
   - This will automatically serch for `index.html` if it is found it will display it.

**Example Usage**:

```javascript
const express = require('express');
const app = express();

// Use built-in middleware to parse JSON
app.use(express.json());

// Use built-in middleware to parse URL-encoded payloads
app.use(express.urlencoded({ extended: true }));

// Use built-in middleware to serve static files
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

These middleware functions are essential for handling various types of requests and serving static content efficiently in your Express.js applications.

---

# Chapter - 4 (REST API)
Creating industry-grade REST APIs involves careful planning and implementation to ensure they are robust, scalable, secure, and maintainable. Below are the steps to create a REST API using Node.js and Express:

### 1. **Setup and Project Initialization**

First, initialize your project:

```bash
mkdir industry-grade-api
cd industry-grade-api
npm init -y
```

### 2. **Install Dependencies**

Install necessary packages:

```bash
npm install express mongoose dotenv cors
npm install --save-dev nodemon
```

- **express**: Web framework for Node.js
- **mongoose**: MongoDB object modeling for Node.js
- **dotenv**: Loads environment variables from a `.env` file
- **cors**: Middleware to enable Cross-Origin Resource Sharing
- **nodemon**: Utility that monitors for changes in your source and automatically restarts your server

### 3. **Project Structure**

Create a suitable project structure:

```bash
.
├── controllers
│   └── productController.js
├── models
│   └── productModel.js
├── routes
│   └── productRoutes.js
├── .env
├── package.json
├── server.js
└── config
    └── db.js
```

### 4. **Configure Environment Variables**

Create a `.env` file to store environment variables:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

### 5. **Database Configuration**

In `config/db.js`, configure the connection to MongoDB:

```javascript
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
```

### 6. **Define the Product Model**

In `models/productModel.js`, define the schema for the product:

```javascript
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
```

### 7. **Create Controllers**

In `controllers/productController.js`, implement the logic for handling requests:

```javascript
const Product = require('../models/productModel');

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new product
const createProduct = async (req, res) => {
  const { name, category, price, stock } = req.body;

  const newProduct = new Product({
    name,
    category,
    price,
    stock
  });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getProducts, createProduct };
```

### 8. **Define Routes**

In `routes/productRoutes.js`, define the routes:

```javascript
const express = require('express');
const { getProducts, createProduct } = require('../controllers/productController');
const router = express.Router();

router.get('/products', getProducts);
router.post('/products', createProduct);

module.exports = router;
```

### 9. **Setup the Server**

In `server.js`, set up the Express server:

```javascript
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

require('dotenv').config();

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', productRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

### 10. **Run the Application**

Add a script in `package.json` to start the server with Nodemon:

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

Start the server:

```bash
npm run dev
```

### Key Considerations

- **Security**: Implement proper authentication and authorization (e.g., JWT).
- **Validation**: Validate incoming data to ensure it meets required standards (e.g., using Joi or express-validator).
- **Error Handling**: Implement robust error handling and logging mechanisms.
- **Testing**: Write unit and integration tests for your API endpoints.
- **Documentation**: Document your API using tools like Swagger or Postman.

---

# Controllers Example
```js
const mongoose = require("mongoose");
const User = require("../models/customerModel.js");

//! getAllUsers
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
};

//! getUserByID
const getUserByID = async (req, res) => {
  try {
    const user = await User.find({ _id: req.params.id });
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

//! New User
const newUser = async (req, res) => {
  try {
    const { userName, userEmail, userPassword } = req.body;
    const newUser = new User({
      userName,
      userEmail,
      userPassword,
    });
    // saving
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//! Delete user
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    if (!userId) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//! update user by PUT
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updateUser) {
      res.status(404).json({ message: "user not found" });
      console.log("user not found");
    }
    res.status(201).json(updateUser);
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
    console.log(error.message);
  }
};
//! update user by PATCH
const patchUser = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(req.body);
    const updateUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updateUser) {
      res.status(404).json({ message: "user not found" });
      console.log("user not found");
    }
    res.status(201).json(updateUser);
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
    console.log(error.message);
  }
};

module.exports = {
  getAllUsers,
  getUserByID,
  newUser,
  deleteUser,
  updateUser,
  patchUser,
};

```

---

# Chapter - 6 (MongoDB)
# MongoDB

It is a NoSQL DB that stores data in _flexible_, _JSON_ like documents, making it easy to scale and handle large volumes of unstructured data.

- It was first released in 2009.

> MongoDB stores data in **collections** and **documents**.

### Collection

- It is a group of mongoDB **documents**.
- Like a SQL Table

### Documents

- It is a set **key-value** pairs.
- Like a SQL Row

### Fields

- A key value pair within a document.
- Like a SQL column.

> **_MongoDB_** ==> **_Collections_** ==> **_Documents_** ==> **_field_**

example: _students_ : _collection_

```json
[
    {
        name: "Ankit",
        age: 22,
        course: B.tech
    }
    {
        name: "Rohan",
        age: 21,
        course: "BBA"
    }
    {
        name: "Deepak",
        age: 23,
        course: "BCA"
    }
]
```

# SQL vs NoSQL

### Scalablity

- **NoSQL**: _Horizontally_ scalable by adding more servers and distributing the loads to multiple servers.

- **SQL**: Veritcally scalable by adding more resources to the single server. which has limits and costly

### Flexablity

- **NoSQL**: Schema-less design, provides more flexiblity. More flexible.

- **SQL**: Requires a predefined schema. Less flexible

### Performance

- **NoSQL**: High speed read write operations making it ideal real time processing and analytics.

- **SQL**: It suffer from slower read/write operations when dealing with very large data set due to ACID transactions.

### On Basis of Structure

- **NoSQL**: Ideal for unstructured data.

- **SQL**: Ideal for structured data.

# Working with MonogDB

#### To open the monogDB shell, use below command:

```shell
mongosh
```

#### To check available databases:

```shell
show dbs
```

#### To CREATE the database

```shell
use databaseName
```

#### To DELETE the database

```shell
db.dropDatabase()
```

#### To DELETE the collection

```shell
db.collectionName.drop()
```

#### To CREATE collections and insert data on DB

```shell
db.collectionName.insertOne({name:"Ankit", age:"22"})
```

#### To INSERT data collections

```js
db.collectionName.insertOne({ name: "Ankit", age: "22" });
```

#### To READ data

```shell
db.collectionName.find()
```

# CRUD Operations

#### CREATE

1. **insertOne()**

```shell
db.cars.insertOne({ "brand": "Mahindra", "model": "Thar", "features": ["touch screen", "reverse camera", "airbags"]})
```

2. **insertMany()**

```js
db.cars.insertMany([
  {
    brand: "Mahindra",
    model: "Thar",
    features: ["touch screen", "reverse camera", "airbags"],
  },
  {
    brand: "Toyota",
    model: "Fortuner",
    features: ["4WD", "cruise control", "hill assist", "touch screen"],
  },
  {
    brand: "Hyundai",
    model: "Creta",
    features: ["sunroof", "airbags", "bluetooth", "wireless charging"],
  },
  {
    brand: "Maruti Suzuki",
    model: "Brezza",
    features: ["keyless entry", "reverse camera", "ABS", "infotainment system"],
  },
  {
    brand: "Kia",
    model: "Seltos",
    features: ["air purifier", "LED headlamps", "sunroof", "ambient lighting"],
  },
]);
```

> Note: Nested document can also be used to store data.

---

#### READ

1. find()

- It will return all the documents of that particular collection.

```shell
# db.collectionName.find()
carDealership> db.cars.find()  # with no condition

# with condition
carDealership> db.cars.find({"brand" : "Mahindra"})

```

2. findOne()

- It return only one document from top most item from collection.

```shell
db.collectionName.findOne()
```

---

#### UPDATE

1. **updateOne()**

```shell
# syntax
db.collectionName.updateOne({condition}, {updation})

# example 1 :fupdating model
db.cars.updateOne(
    {"model" : "Thar"}, # condition checked
    {$set: {"model" : "Scorpio"}} # updation
)

# example 2 : adding color field
db.cars.updateOne(
    {"model" : "Thar"}, # condition checked
    {$push: {"color" : "Black"}} # updation
)

# example 3 : removing color value from field
db.cars.updateOne(
    {"model" : "Thar"}, # condition checked
    {$pull: {"color" : "Black"}} # updation
)

# example 3 : removing entire color field
db.cars.updateOne(
    {"model" : "Thar"}, # condition checked
    {$unset: {"color" : "Black"}} # updation
)

```

- `$set` : is used to set the new/updated values.

- `$unset` : used to remove field from document.

- `$push` : used to add new field to the document.

- `$pull` : used to remove values from document.

2. **updateMany()**

- It is used to update multiple documents at same time.

```shell
# example 1 : adding color field to document
db.cars.updateMany(
    {"features" : "reverse camera"}, # condi
    {$set: {"color" : "Black"}} # updation
)

# example 2: updating arrays of document
db.cars.updateMany(
    {"model" : "Scorpio"},
    {$push: {features: {$each:["Sunroof", "Automatic gear", "4X4"]}}}
)

# example 3: To set all the values of document
db.cars.updateMany(
    {}, # condition (All document)
    {$set: {color: "Black"}} # updation
)

```

- `$upsert` : It is a combination of insert and update. if no matching document will there, then in that case it create a new document.

---

#### DELETE

1. **deleteOne()**

```shell
db.collectionName({condition})

# example -1
db.cars.deleteOne(
    {_id: '6714e0f6f5ac09ada30eeec7'}
)

```

2. **deleteMany()**

```shell
db.collectionName.deleteMany({condition})

# example -1
db.cars.deleteMany({features: "airbags"})


```

# Data Types

- MonogDB stores data in **BSON** (Binary JSON) fromat.
- BSON includes all json datatypes and adds more.
- Choosing the correct data types is crucial for efficient storeage and quering.

1. `ObjectID` : (Act as Primary key, it is set by monogDB itself)

```shell
_id: ObjectId('6714e0f6f5ac09ada30eeec7'),
```

2. `String` : To store characters and strings.

```shell
firstName : "Ankit"
```

3. `Integer` : To store numerical values

```shell
rating: 5
```

4. `Double` : To store decimal values

5. `Boolean` : True/false

6. `Array` : To store multiple values

7. `Object/Embedded Document` :

8. `Date` :

```shell
db.cars.updateOne(
    {model: "City"},
    {$set: {launchedDate: new Date()}}
)
# O/P
launchedDate : ISODate("2024-08-21T14:23:00z")
```

9. `Null` :

```shell
middleName : null,
```

10. `Timestamp` : To store the timestamp values

```shell
ts : Timestamp(123453536,1),
```

# MongoDB Operators

### 1. Comparison Operators

1. `$gt` : **greater than**

```shell
db.cars.find({"horsepower": {$gt:390}})
```

2. `$gte` : greater than equal to

```shell
db.cars.find({"horsepower": {$gte:390}})
```

3. `$lt` : **less than**

```shell
db.cars.find({"horsepower": {$lt:300}})
```

4. `$lte` : **less than equal to**

```shell
db.cars.find({"horsepower": {$lte:300}})
```

5. `$ne` : **not equal to**

```shell
# Not eaul to : return all values that are not equal
db.cars.find({"horsepower": {$ne:300}})
```

#### Searching multiple values using array

6. `$in` : **in**, mathces values specified in an array

```shell
db.cars.find({"horsepower": {$in:[300,400]}})
```

7. `$nin` : **not in**

```shell
# opposite of in
db.cars.find({"horsepower": {$nin:[300,400]}})
```

### 2. Logical Operators

1. `AND` : Both condition must be true

```shell
db.cars.find({$and: [
    {fuel_type: "Electric"},
    {year : 2023}]}
)
```

2. `OR` : Any one condition needs to be true

```shell
db.cars.find({$or: [
    {fuel_type: "Electric"},
    {fuel_type:"Gasoline"}]}
)

```

3. `NOR` : Not of Both condition

```shell
db.cars.find({$nor: [
    {fuel_type: "Electric"},
    {fuel_type:"Gasoline"}]}
)

```

4. `NOT` : Not of the specified condition.

## Element operator

In MongoDB, the `$exists` operator is used to query documents based on whether a field exists or not, while the `$type` operator is used to query based on the type of a field.

### 1. **`$exists` Operator**

The `$exists` operator is used to match documents that contain (or do not contain) a specific field.

#### Syntax:

```javascript
{ field: { $exists: <boolean> } }
```

- `true`: If the field exists.
- `false`: If the field does not exist.

#### Example:

To find documents where the field `age` exists:

```javascript
db.collection.find({ age: { $exists: true } });
```

To find documents where the field `age` does **not** exist:

```javascript
db.collection.find({ age: { $exists: false } });
```

### 2. **`$type` Operator**

The `$type` operator is used to match documents where the field is of a specific BSON type.

#### Syntax:

```javascript
{ field: { $type: <type> } }
```

- `<type>`: The BSON data type you want to check for (e.g., `string`, `int`, `array`, etc.).

#### Example:

To find documents where the `age` field is of type `int`:

```javascript
db.collection.find({ age: { $type: "int" } });
```

Here’s a quick list of common BSON data types:

- `double`: 1
- `string`: 2
- `object`: 3
- `array`: 4
- `int`: 16
- `boolean`: 8
- `date`: 9

You can combine these operators in queries to make more complex searches based on the existence and type of fields.

### 3. Array operators

1. `$size` : return all documents that match specified array size.

```javascript
db.collection.find({ hobbies: { $size: 4 } });
```

2. `$all` : return all documents that match specified pattern.

```javascript
db.collection.find({ hobbies: { $all: ["play", "read"] } });
```

### 4. Cursor operators
1. **count** : `find().count()`

2. **skip**: `find().skip()` - used to skip documents of starting

3. **sort**: `find().sort("name":1)` -1 for descending
```javascript
db.cars.find().sort({year:1})
```

4. **limit** : `find().limit(5)`

# Aggregate Framework
It is powerful framework for complex operations like **filtring**, **grouping**, **sorting**, **reshaping**, and **summarizing** data in a flexible way via ***pipeline***.

Aggregation in MongoDB is a powerful feature that enables developers to perform complex data transformations and computations on collections of documents. By utilizing the aggregation framework, users can efficiently group, filter, and manipulate data to generate summarized results.


---

# Chapter - 7 Connecting React with Backend

### Frontend
1. use axios library to make network calls
```js
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/users/");
        setData(response.data);
        console.log(response);
      } catch (error) {
        console.log(`Error in fetching data ${error.message}`);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Data from backend</h1>
      <div className="App">
        {data ? (
          data.map((user) => (
            <div key={user._id}>
              {" "}
              <h1>{user.userName}</h1> <p>Email: {user.userEmail}</p>{" "}
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
}

export default App;
```
### Backend
1. install `cors` via `npm`
> npm i cors
2. use cors as a middleware
```js
const cors = require("cors")

// middlewares
app.use(express.json());
app.use(cors());
```






