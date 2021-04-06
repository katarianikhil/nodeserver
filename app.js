const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use((req, res, next)=>{  
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    res.setHeader(  
        "Access-Control-Allow-Headers",  
        "Origin, X-Requested-With, Content-Type, Accept");  
    res.setHeader("Access-Control-Allow-Methods",  
        "GET, POST, PATCH, DELETE, OPTIONS");  
    next();  
});  
app.use("/static", express.static("public"));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();
const todos = require('./routes/todos');
app.use('/api', todos);

app.listen(3000, ()=> console.log("Server Up and running"));