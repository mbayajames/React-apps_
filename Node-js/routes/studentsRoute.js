const express = require('express');
const studentscontroller = require('../Controllers/studentscontroller');
const router = express.Router();

//  GET all students
 router.get('/getAllStudent',studentscontroller.getAllStudents);


 router.post('/Addstudent',studentscontroller.AddStudent);

 router.put('/updatestudent/:id',studentscontroller.updateStudent);


 router.delete('/:id',studentscontroller.deleteStudent);


//  PUT - Update a student by ID
router.put('/students/:id', (req, res) => {
    res.send({ type: 'Update Request' });
});

// DELETE - Delete a student by ID
router.delete('/students/:id', (req, res) => {
    res.send({ type: 'Delete Request' });
});

module.exports = router;


