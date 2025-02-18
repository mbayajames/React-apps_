const express = require('express');     //! to import express
const routes = require('./Routes/api');

const app = express();      //! to use express
app.use(routes);
app.listen(process.env.port || 4000, function(){
    console.log('Now listesting for requests on: http://localhost:4000');
})
