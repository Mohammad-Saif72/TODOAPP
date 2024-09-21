const express = require('express')
//   import the model
const Todo = require('../models/Todo');

// define Route Handler

exports.createTodo = async(req,res)=>{
    try {
        //extract title and description from request body by destructuring
        const {title,description} = req.body;

         // Create a new todo object and insert in DB
        const response = await Todo.create({title,description});
        
        // this above line can be done by manually

       // const todo = new Todo({ title, description }); // Manually create a new instance of Todo
       // const response = await todo.save(); // Save the instance to the database

        //send a json response with a success flag
        res.status(200).json(
           {
               success:true,
               data:response,
               message:'Entry Created Successfully'
           }

        )
    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({
            success:false,
            data:'internal server error',
            message:error.message,
        })
    }
}