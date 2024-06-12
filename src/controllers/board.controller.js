import { pool } from "../config/db.js";

export const getBoards = async (req, res) => {
    try {
        const [boards] = await pool.query('SELECT * FROM boards');
        res.status(200).json(boards); // Devuelve un estado 200 si la consulta fue exitosa
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' }); // Devuelve un estado 500 en caso de error
    }
};

export const getBoard = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(`Fetching board with id: ${id}`);

        const [result] = await pool.query('SELECT * FROM boards WHERE id = ?', [id]);
        console.log(`Query result:`, result);

        if (result.length > 0) {
            res.status(200).json(result[0]); // Devuelve un estado 200 si la consulta fue exitosa
        } else {
            res.status(404).json({ message: 'Board not found' }); // Devuelve un estado 404 si no se encuentra la tarea
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' }); // Devuelve un estado 500 en caso de error
    }
}

export const createBoard = async (req, res) => {
    try {
        const { name, description } = req.body;
        const newBoard = { name, description };
        await pool.query('INSERT INTO boards SET ?', [newBoard]);
        res.json({ message: 'New board created' });

        console.log(`Creating board with title: ${name} and description: ${description}`);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' }); // Devuelve un estado 500 en caso de error
    }
}   // Devuelve un estado 500 en caso de error  

export const updateBoard = async (req, res) => {    
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        const updatedBoard = { name, description };
        await pool.query('UPDATE boards SET ? WHERE id = ?', [updatedBoard, id]);
        res.json({ message: 'Board updated' });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' }); // Devuelve un estado 500 en caso de error
    }
}

export const deleteBoard = async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM boards WHERE id = ?', [id]);
        res.json({ message: 'Board deleted' });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' }); // Devuelve un estado 500 en caso de error
    }
}
