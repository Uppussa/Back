import { pool } from '../config/db.js'

export const getTasks = async (req, res) => {
    try {
        const [tasks] = await pool.query('SELECT * FROM tasks')
        res.json(tasks)

    }
    catch (error) {
        console.error(error.message)
    }
}

export const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(`Fetching task with id: ${id}`);
        
        const [result] = await pool.query('SELECT * FROM tasks WHERE id = ?', [id]);
        console.log(`Query result:`, result);
        
        if (result.length > 0) {
            res.status(200).json(result[0]); // Cuando la tarea se encuentra, se devuelve con estado 200
        } else {
            res.status(404).json({ message: 'Task not found' }); // Cuando la tarea no se encuentra, se devuelve un mensaje con estado 404
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' }); // Devuelve un mensaje de error con estado 500
    }
};

export const createTask = async (req, res) => {
    try {
        const {name, description} = req.body;
        const newTask = {name, description};
        await pool.query('INSERT INTO tasks SET ?', [newTask]);
        res.json({message: 'New task created'});

        console.log(`Creating task with title: ${name} and description: ${description}`);
        
    }
    catch (error) {
        console.error(error.message)
    }
}

export const updateTask = async (req, res)  => {
    try{
        const {id} = req.params;
        const {name, description} = req.body;
        const updatedTask = {name, description};
        await pool.query('UPDATE tasks SET ? WHERE id = ?', [updatedTask, id]);
        res.json({message: 'Task updated'});

    }
    catch (error) {
        console.error(error.message)
    }
}

export const deleteTask = async (req, res)  => {
    try{
        const {id} = req.params;
        await pool.query('DELETE FROM tasks WHERE id = ?', [id]);
        res.json({message: 'Task deleted'});

    }
    catch (error) {
        console.error(error.message)
    }
}
