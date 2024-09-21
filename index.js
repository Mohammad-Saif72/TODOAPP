const express = require('express');// importing express
const app = express(); //creating server instance

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());


// import routes for TODO API
const todoRoutes = require('./routes/todos')
const getTodo = require('./routes/todos');
const updateTodo = require('./routes/todos');
const deleteTodo = require('./routes/todos');

// mount(append or add) todo apis routes
app.use('/api/v1',todoRoutes)
app.use('/api/v1',getTodo)
app.use('/api/v1',updateTodo);
app.use('/api/v1',deleteTodo);

// start server
app.listen(PORT,()=>{
    console.log(`App is running successfully.${PORT}`);
})

// connect to the database
const dbconnect = require('./config/database');
dbconnect();

// default Route

app.get('/',(req,res)=>{
    res.send(`<h1> This is HOMEPAGE </h1>`);
})