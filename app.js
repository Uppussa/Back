import express from 'express'
import cors from 'cors';
import { PORT } from './src/config/config.js'
import { getTasks } from './src/controllers/TaskController.js';

const app = express()
app.use(cors())
app.use(express.json())

app.use(getTasks)
    

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))