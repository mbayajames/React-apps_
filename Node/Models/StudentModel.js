const mongoose = require('mongoose')

// Connect to MongoDB

const Schema = mongoose.Schema

const studentSchema = new Schema({
    firstName: {
        type: String,
        req: [true, 'firstname is req']
    }

    lastName: {
        type: String,
        req: [true, 'lastname is req']
    }

    gender: {
        type: String
    }

    password: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        enum: ["user", "man1", "man2", "man3", "admin"],
        default: "user",
    },

    passwordResetToken:{
        type: DataTypes.STRING
    },

    passwordResetTokenExpires:{
        type: DataTypes.DATE
    }
});

const Student = mongoose.model('student', studentSchema);



module.exports = Student;