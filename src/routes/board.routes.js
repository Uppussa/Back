import { Router } from "express";
import { getBoards, getBoard, createBoard, updateBoard, deleteBoard } from "../controllers/board.controller.js";

const router = Router();

router.get('/boards', getBoards);
router.get('/boards/:id', getBoard);
router.post('/boards', createBoard);
router.put('/boards/:id', updateBoard);
router.delete('/boards/:id', deleteBoard);


export default router;