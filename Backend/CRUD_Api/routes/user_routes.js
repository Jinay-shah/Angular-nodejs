//const express = require("express");

module.exports = function(app) {
    var user = require('../controller/user_controller');

    app.route('/getAllUsers').get(user.getAllUsers);
    app.route('/getUserById/:id').get(user.getUserById);
    app.route('/addUser').post(user.addUser);
    app.route('/editUser/:id').put(user.editUser);
    app.route('/deleteUser/:id').delete(user.deleteUser);
}


//app.use(express.json()) // => req.body
// const router = express.Router();
// router.get("/todos", async(req, res) => {
//     try {
//         await client.connect();
//         const allTodos =await client.query("SELECT * FROM public.USER");
//         res.json(allTodos.rows);
//     } catch (err) {
//         console.error(err.message);
//     }
// });
// router.get("/todos/:id", async (req, res) => {
//     const { id } = req.params;
//     try {
//         const todo =await client.query("SELECT * FROM public.USER WHERE user_id = $1",[id]);
//         res.json(todo.rows);
//     } catch (err) {
//         console.error(err.message);
//     }
//     client.end;
// });


// router.get('/', (req, res) => {
//     res.send("Hello World!!"); 
// });


// router.post("/todos", async (req, res) => {
//     try {
//         // debugger;
//         await client.connect();
//         const {user_first_name, user_last_name, user_organization_name, user_email, user_created_by,
//              user_status, user_confirmation_status, user_freeze} = req.body;
//         const newTodo =await client.query("INSERT INTO public.user (user_first_name, user_last_name, user_organization_name, user_email, user_created_by, user_status, user_confirmation_status, user_freeze) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *", [user_first_name, user_last_name, user_organization_name, user_email, user_created_by, user_status, user_confirmation_status, user_freeze]);
  
//         res.json(newTodo);
//     } catch(err) {
//         console.error(err.message);
//     }
//     client.end;
// });

// router.put("/todos/:id", async (req, res) => {
//     try {
//         await client.connect();
//         const { id } = req.params;
//         //const { user_first_name } = req.body;
//         const {user_first_name, user_last_name, user_organization_name, user_email, user_created_by,
//             user_status, user_confirmation_status, user_freeze} = req.body;
//         const UpdateTodo = await client.query("UPDATE public.user SET user_first_name = $1, user_last_name = $2, user_organization_name = $3, user_email = $4, user_created_by = $5, user_status = $6, user_confirmation_status = $7, user_freeze = $8 WHERE user_id = $9", [ user_first_name, user_last_name, user_organization_name, user_email, user_created_by, user_status, user_confirmation_status, user_freeze, id]);
        
//         res.json(UpdateTodo.rows[0]);
//     } catch(err) {
//         console.error(err.message);
//     }
//     client.end;
// });

// router.delete("/todos/:id",async(req, res) =>{
//     await client.connect();
//     try {
//         const { id } = req.params;
//         const deleteTodo = await client.query("DELETE FROM public.user WHERE user_id =$1", [id]);
   
//         res.json("Deleted")
//     } catch(err) {
//         console.error(err.message);
//     }

//     client.end;
    
// });
//module.exports = router;