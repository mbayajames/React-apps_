const { authSchema } = require("../helpers/validationschema"); // Import validation schema
const StudentAuth = require("../models/studentauthmodel"); // Import StudentAuth model
const createError = require("http-errors"); // Import http-errors for error handling
// const { signAccessToken, signRefreshToken } = require("../helpers/tokenUtils"); // Ensure token functions are imported

module.exports = {
    // User Registration
    register: async (request, response, next) => {
        try {
            const { email, password } = request.body; // Extract email and password
            
            // Validate request data
            const result = await authSchema.validateAsync(request.body);

            // Check if email already exists in the database
            const Exists = await StudentAuth.findOne({ email: email });
            if (Exists) throw createError.Conflict(`${email} already exists`);

            // Create a new StudentAuth document
            const student = new StudentAuth(result);

            // Save the student record in the database
            const savedStudent = await student.save();

            response.send(savedStudent); // Send response back
        } catch (error) {
            if (error.isJoi === true) error.status = 422; // Handle Joi validation errors
            next(error); // Pass error to middleware
        }
    },

    // User Login
    login: async (req, res, next) => {
        try {
            // Validate request data
            const result = await authSchema.validateAsync(req.body);

            // Fix: Corrected "user.findOne" to "StudentAuth.findOne"
            const user = await StudentAuth.findOne({ email: result.email });
            if (!user) throw createError.NotFound("User not registered"); // If user not found, return error

            // Fix: Changed "isMatch" condition (was incorrect)
            const isMatch = await user.isValidPassword(result.password);
            if (!isMatch) throw createError.Unauthorized("Username/Password not valid");

            // If password matches, generate access & refresh tokens
            // const accessToken = await signAccessToken(user.id);
            // const refreshToken = await signRefreshToken(user.id);

            // Send tokens as response
            res.json({ accessToken, refreshToken });
        } catch (error) {
            if (error.isJoi === true)
                return next(createError.BadRequest("Invalid username/password"));
            next(error);
        }
    }
};






// const { authSchema } = require("../helpers/validationschema");
// const StudentAuth = require("../models/studentauthmodel");
// require('http-errors')

// module.exports = {
//     register: async (request, response, next) => {
//         try {
//             const {email, password} = request.body
//             const result = await authSchema.validateAsync(request.body);
//             const Exists = await StudentAuth.findOne({ email: email })
//             if (Exists) throw createError.Conflict(`${email} already exists`)
//             const student = new StudentAuth(result)
//             const savedStudent = await student.save()

//             response.send(savedStudent)
//         } catch (error) {
//             if(error.isJoi === true)error.status = 422
//             next(error.message)
//         }
//     },

//     login: async(req, res, next) => {
//         try {
//             const result = await authSchema.validateAsync(req.body)
//             const user = await user.findOne({email: result.email})
//             if(!user) throw createError.NotFound("user not registered")

//             matching the password
//             const isMatch = await user.isValidPassword(result.password)
//             if(isMatch) throw createError.Unauthorized("Username/Password not valid")

//             if password match then generate token
//              const accessToken = await signAccessToken(user.id)
//              const RefreshToken = await signRefreshToken(user.id)
//         } catch (error) {
//             if(error.isJoi === true)
//                return next(createError.BadRequest('Invalid username/password'))
//                next(error)
//         }
//     }.
// }



