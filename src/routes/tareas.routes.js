import { Router } from "express";
import  {getTasks } from '../controllers/TaskController.js' // Asegúrate de que la ruta sea correcta

const router = Router();

router.get('/tarea', getTasks);

export default router;
