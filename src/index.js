import express from 'express'
import cors from 'cors';
import { PORT } from './config/config.js'
import  taskRoutes  from './routes/task.routes.js';
import  boardRoutes  from './routes/board.routes.js';

const app = express()
app.use(cors())
app.use(express.json())

app.use(taskRoutes)
app.use(boardRoutes)

    

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))