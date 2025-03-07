const JWT = require("jsonwebtoken");
const createError = require("http-errors");
const User = require("../Models/studentAuthModel");
const { response } = require("express")


module.exports = {
    signAccessToken:((resolve, reject) => {
        return new Promises((resolve, reject) => {
            const payload = {}
            const secret = process.env.ACCESS_TOKEN_SECRET;
            const options = {
                expiresIn: '10min',
                issuer: 'EddTechnologies',
                audience: UserId,
            }

            JWT.sign(payload, secret, options, (error, token) => {
                if(error) {
                    console.log(error.message);
                    reject(createError.InternalServerError());
                }
                resolve(token);
            })
        })
    })
},


verifyAccessToken: (request, response, next) => {
    if (!request.headers["authorization"])
        return next(createError.Unauthorized());
    const authHeader = request.headers["authorization"];
    const bearerToken = authHeader.split(" ");
    const token = bearerToken[1];

    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, payload) => {
        if (error) {
            if (error.name === "JsonWebTokenError") {
                return next(createError.Unauthorized());
            } else {
                return next(createError.Unauthorized(error.message));
            }
        }
        request.payload = payload;
        next();
    });
},

signRefreshToken: (UserId) => {
    return new Promise((resolve, reject) => {
        const payload = {};
        const Secret = process.env.ACCESS_TOKEN_SECRET;
        const options = {
            expiresIn: "1d",
            issuer: "EddTechnologies.com",
            audience: UserId,
        };
        JWT.sign(payload, Secret, options, (error, token) => {
            if (error) {
                console.log(error.message);
                reject(createError.InternalServerError());
            }
            resolve(token);
        });
    });
},


restrict: (...allowedRoles) => {
    return (req, res, next) => {
        const userRole = req.payload.role;

        if (!userRole || !allowedRoles.includes(userRole)){
            return next (
                createError.Forbidden(
                    "Sorry! You do not have permission to perform this action."
                )
            );
        }
        next();
    }
}