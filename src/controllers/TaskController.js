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
        const {id} = req.params
        const [result] = await pool.query('SELECT * FROM tasks WHERE id = ?', [id])
        if (result.length === 0) {
            res.status(200).json(result[0])
        }   
        else {
            res.status(404).json({message: 'Task not found'})
        }

    }
    catch (error) {
        console.error(error.message)
    }
    
}   


