const express =require("express");
const app =express();
const cors = require('cors');
//const client = require('./database');
app.use(cors({
    origin: '*'
}));
app.use(express.json()) // => req.body
const userRouter = require('./routes/user_routes');
userRouter(app);
//app.use('/user',userRouter);
app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});
// app.get("/todos", async(req, res) => {
//     try {
//         await client.connect();
//         const allTodos =await client.query("SELECT * FROM public.USER");
//         res.json(allTodos.rows);
//     } catch (err) {
//         console.error(err.message);
//     }
// });
// app.get("/todos/:id", async (req, res) => {
//     const { id } = req.params;
//     try {
//         const todo =await client.query("SELECT * FROM public.USER WHERE user_id = $1",[id]);
//         res.json(todo.rows);
//     } catch (err) {
//         console.error(err.message);
//     }
//     client.end;
// });

// app.listen(5000, () => {
//     console.log("Server is listening on port 5000");
// });
// app.get('/', (req, res) => {
//     res.send("Hello World!!"); 
// });


// app.post("/todos", async (req, res) => {
//     try {
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

// app.put("/todos/:id", async (req, res) => {
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

// app.delete("/todos/:id",async(req, res) =>{
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



// ----------------------------------
// const Joi = require('joi');
// const { Client } = require('pg');
// const express = require('express');
// const req = require('express/lib/request');
// const app = express() 
// app.use(express.json());
// require('dotenv').config();
// const courses =[
//     {id : 1, name : 'DB'},
//     {id : 2, name : 'DS'},
//     {id : 3, name : 'COA'}
// ]
// app.get('/', (req, res) => {
//     res.send("Hello World!!"); 
// });

// app.get('/api/courses', (req, res) =>{
//     res.send(courses);
// });




// app.post('/api/courses', (req, res) =>{
    
//     const { error } = validateCourse(req.body);
   
    
//     if(error){
//         //400 bad req
//         return res.status(400).send(error.details[0].message);
        
//     }  
//     const course = {
//         id: courses.length + 1,
//         name: req.body.name
//     };
//     courses.push(course);
//     res.send(course);
// });

// app.put('/api/courses/:id', (req, res) =>{
//     //look up th course
    
//    const course = courses.find(c => c.id === parseInt(req.params.id));
//    if(!course) return res.status(404).send('The course with given ID was not found');

//     //if not exists , return 404
//     const result = validateCourse(req.body);
//     const { error } = validateCourse(req.body);
//     //validate

//     //if invalid, return 400
    
//     if(error){
//         //400 bad req
//         return res.status(400).send(error.details[0].message);
        
//     }
//     //update course 
//     course.name = req.body.name;
//     //return updated course
//     res.send(course)
// });
// app.get('/api/courses/:id', (req, res) =>{
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if(!course) return res.status(404).send('The course with given ID was not found');
//     res.send(course);
// }) 

// app.delete('/api/courses/:id', (req, res) =>{
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if(!course) return res.status(404).send('The course with given ID was not found')
    
//     const index = courses.indexOf(course);
//     courses.splice(index, 1);
//     res.send(course);  
// });

// //PORT
// const port = process.env.PORT || 3000 ;
// app.listen(port, () => console.log(` listening on port ${port} `)); 

// function validateCourse(course){
//     const schema = {
//         name: Joi.string().min(3).required()
//     };
//     return Joi.validate(course, schema);
// }

// const client = new Client({
//     host: "localhost",
//     port: 5432,
//     user: "postgres",
//     password: "admin",
//     database: "synergy_db"
// })

// client.connect();

// client.query(`select * from demo_table`,(err, result) =>{
//     if(!err){
//         console.log(result.rows);
//     }
//     client.end();
// })