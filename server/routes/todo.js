var express = require('express');
var router = express.Router();
const pool = require("../db");
router.post("/", async (req, res) => {
    console.log('oh hi I');
    try {
        const { description } = req.body;
        console.log(description);
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]
        );

        res.json(newTodo.rows[0]);
    } catch (err) {
        console.log(err);
        return res.status(500).send({message:err});
    }
});

//get all todos

router.get("/", async (req, res) => {
    try {

        console.log('getting stuff I changed again again');
        const allTodos = await pool.query("SELECT * FROM todo");
        console.log('got stuff');
        res.json(allTodos.rows);
    } catch (err) {
        return res.status(500).send({message:err});
    }
});

//get a todo

router.get("/:id", async (req, res) => {
    try {
        
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
            id
        ]);

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//update a todo

router.put("/:id", async (req, res) => {

        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query(
            "UPDATE todo SET description = $1 WHERE todo_id = $2",
            [description, id]
        );

        res.json("Todo was updated!");
  
});

//delete a todo

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
            id
        ]);
        res.json("Todo was deleted!");
    } catch (err) {
        res.status(500).send();
    }
});



/**
 * This function comment is parsed by doctrine
 * @route GET /todos
 * @returns {object} 200 - An array of todos
 * @returns {Error}  default - Unexpected error
 */


module.exports = router;