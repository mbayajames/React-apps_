const  express = require('express');
const routes = express.Router();

//get a list of students from the database
routes.get('/students', (req,res) =>{
    res.send({type:'Get Request'});
})

//add students to the db
routes.post('/students', (req,res) =>{
    res.send({type:'Post Request'});
})

//update students in the db
routes.put('/students/:id', (req,res) =>{
    res.send({type:'Update Request'});
});

//delete a student from the db
routes.delete('/students/:id', (req,res) =>{
    res.send({type:'Delete Request'});
});
module.exports = routes;