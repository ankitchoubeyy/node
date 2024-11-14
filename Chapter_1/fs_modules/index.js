const fs = require("fs");

//! reading file synchronously
const text = fs.readFileSync("./text.txt","utf-8");
// console.log(text);

//! reading file asynchronously
fs.readFile("./text.txt", "utf-8", (err, data)=>{
    try {
        console.log(data);
    } catch (error) {
        console.log(error);
    }
})

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
