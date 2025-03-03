const JWT = require('jsonwebtoken');
const createError = require('http-errors');
const User = require('../models/studentauthmodel');


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
}