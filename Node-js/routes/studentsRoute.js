const express = require('express');
const routes = express.Router();

// get all students
routes.get('/students', (req,res)=>{
    res.send({type:'Get Request'});
});

// Add student
routes.post('/students', (req,res)=>{
    res.send({type:'Post Request'});
});

// get student
routes.put('/students/:id', (req,res)=>{
    res.send({type:'Update Request'});
});

// update student
routes.delete('/students:/id', (req,res)=>{
    res.send({type:'Delete Request'});
});

module.exports = routes;