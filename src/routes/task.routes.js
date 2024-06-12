import { Router } from "express";
import  {getTasks, getTask, createTask, updateTask, deleteTask } from '../controllers/task.controller.js' // Asegúrate de que la ruta sea correcta

const router = Router();

router.get('/task', getTasks);
router.get('/tasks:id', getTask);
router.post('/task', createTask);
router.put('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);

export default router;
