// const todos = require('../models/Todo');

// const GetTodo = async function (req,res){
//     try {
        
//         const todoData = await todos.find({});
//         // res.send('kaam ho gya');
//         // res.send(todoData);
                
//         //send a json response with a success flag
//                 res.status(200).json(
//                     {
//                         success:true,
//                         data:todoData,
//                         message:'Entry Created Successfully'
//                     }
         
//                  )
//     } catch (error) {
//         console.error(error);
//         console.log(error);
//         res.status(500).json({
//             success:false,
//             data:'internal server error',
//             message:error.message,
//         })
//     }

// }

// const getTodoById =async function (req,res){
//     try {
//         // request todo item based on id
//         const id = req.params.id;
//         const todo =  await todos.findById({_id:id});
        
//          if(!todo){
//             res.status(404).send('did not found data with given id');
//          }

//    //send a json response with a success flag
//          res.status(200).json(
//             {
//                 success:true,
//                 data:todo,
//                 message:'Entry Created Successfully'
//             }
 
//          )
         

//     } catch (error) {
//         console.error(error);
//         console.log(error);
//         res.status(500).json({
//             success:false,
//             data:'internal server error',
//             message:error.message,
//         })
//     }
// }

// // Exporting both functions as part of an object
// module.exports = {
//     GetTodo,
//     getTodoById,
// };


const todos = require('../models/Todo');

// Fetch all todos
const GetTodo = async function (req, res) {
    try {
        const todoData = await todos.find({});
        
        res.status(200).json({
            success: true,
            data: todoData,
            message: 'Entries fetched successfully',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            data: 'Internal server error',
            message: error.message,
        });
    }
}

// Fetch todo by ID
const getTodoById = async function (req, res) {
    try {
        const id = req.params.id;
        const todo = await todos.findById(id);  // Simplified the query
        
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: 'Todo not found with the given ID',
            });
        }

        res.status(200).json({
            success: true,
            data: todo,
            message: 'Entry fetched successfully',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            data: 'Internal server error',
            message: error.message,
        });
    }
}

// Export both functions
module.exports = {
    GetTodo,
    getTodoById,
};
