const Student = require(../models/student.js);
module.exports = {
    AddStudent: async(req, res, next) =>{
        try {
            const student = new Student(req,.body)
            const result = await student.save();
            res.send(result)

        } catch (error) {
            console.log(error.message);
            // if(error.name === "ValidationError") {
            //     next(createError(422, error.message))
            //     return;
            // }
        }
        next(error)
    }
}