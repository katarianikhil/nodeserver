const express = require("express");
const app = express.Router();
const dataRepo = require('../data/StudData');





app.get('/',(req, res) => {
    dataRepo.find("Nikhil Kataria").then((stud_data)=>{
        console.log(stud_data);
    
        // res.statusCode = 200;
        res.json( stud_data);
    }).catch((error)=>console.log(error));
});

app.post('/', (req, res) => {
    dataRepo.create(req.body.name, req.body.rollno).then((todo) => {
    res.redirect("/todos");
    }).catch((error) => console.log(error));
    });

app.post("/:id", async(req, res) => {
    const todo = { done: req.body.done };
    await dataRepo.updateStatusById(req.params.id.substring(1),
    todo).then(
    
    res.redirect("/todos")
    ).catch((error) => console.log(error));
    });



module.exports = app