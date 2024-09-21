//   import the model
const Todo = require('../models/Todo');

// define Route Handler

exports.deleteTodo = async function (req,res){
               try {
                const {id} = req.params;

                const deleted = await Todo.findByIdAndDelete(id);
                res.status(200).json(
                    {
                        success:true,
                        data:deleted,
                        message:"Deleted successfully"
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