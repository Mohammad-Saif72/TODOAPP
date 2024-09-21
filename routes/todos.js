const express = require('express');
const router = express.Router();

//import controller
const {createTodo} = require('../controllers/createTodo');
const {GetTodo , getTodoById}= require('../controllers/GetTodo');
const {updateTodo} = require('../controllers/updateTodo');
const {deleteTodo} = require('../controllers/deleteTodo');

//define APi routes 
router.post('/createTodo',createTodo);
router.get('/getTodo',GetTodo);
router.get('/getTodo/:id',getTodoById);
router.put('/updateTodo/:id',updateTodo);
router.delete('/deleteTodo/:id',deleteTodo);

module.exports = router;