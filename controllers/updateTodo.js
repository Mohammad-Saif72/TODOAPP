//   import the model
const Todo = require('../models/Todo');

// define Route Handler

exports.updateTodo = async function (req,res){
               try {
                const {id} = req.params;
                const {title,description} = req.body;

                const TodoUpdate = await Todo.findByIdAndUpdate(
                    {_id:id},
                    {title,description,updatedAt:Date.now()}
                )

                res.status(200).json({
                    success:true,
                    data:TodoUpdate,
                    message:'Updated Successfully'
                })
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