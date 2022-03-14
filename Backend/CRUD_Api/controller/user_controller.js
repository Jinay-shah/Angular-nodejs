const pool = require('../database');
//const router = express.Router();
exports.getAllUsers = ( async(req, res) => {
    try {
        
        const allTodos =await pool.query("SELECT * FROM public.USER order by user_id asc");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
    
});

exports.getUserById = ( async (req, res) => {
    
    const { id } = req.params;
    try {
        
        const todo =await pool.query("SELECT * FROM public.USER WHERE user_id = $1",[id]);
        res.json(todo.rows);
    } catch (err) {
        console.error(err.message);
    }
    
});


exports.get = (async (req, res) => {
    res.send("Hello World!!"); 
});


exports.addUser = (async (req, res) => {
    try {
        
       
        const {user_first_name, user_last_name, user_organization_name, user_email, user_created_by,
             user_status, user_confirmation_status, user_freeze} = req.body;
        const newTodo =await pool.query("INSERT INTO public.user (user_first_name, user_last_name, user_organization_name, user_email, user_created_by, user_status, user_confirmation_status, user_freeze) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *", [user_first_name, user_last_name, user_organization_name, user_email, user_created_by, user_status, user_confirmation_status, user_freeze]);
  
        res.json(newTodo.rows[0]);
    } catch(err) {
        console.error(err.message);
    }
    
});

exports.editUser = (async (req, res) => {
    try {
       
        const { id } = req.params;
        //const { user_first_name } = req.body;
        const {user_first_name, user_last_name, user_organization_name, user_email, user_created_by,
            user_status, user_confirmation_status, user_freeze} = req.body;
        const UpdateTodo = await pool.query("UPDATE public.user SET user_first_name = $1, user_last_name = $2, user_organization_name = $3, user_email = $4, user_created_by = $5, user_status = $6, user_confirmation_status = $7, user_freeze = $8 WHERE user_id = $9", [ user_first_name, user_last_name, user_organization_name, user_email, user_created_by, user_status, user_confirmation_status, user_freeze, id]);
        
        res.json(UpdateTodo);
    } catch(err) {
        console.error(err.message);
    }
    
});

exports.deleteUser = (async(req, res) =>{
   
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM public.user WHERE user_id =$1", [id]);
   
        res.json("Deleted")
    } catch(err) {
        console.error(err.message);
    }

    
});