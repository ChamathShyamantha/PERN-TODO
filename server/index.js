const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//create a todo

app.post("/todos",async(req,res) => {
    try{

        console.log(req.body);

} catch (err){
    console.error(err.message);
}
});
//get all todo

//get to do

//update a todo

//delete a todo
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});