import express from 'express';
import { AddForm, GetForm, deleteForm, updateForm } from '../controllers/Form.js';

const router = express.Router();

router.get("/", GetForm);

router.post("/", AddForm);

router.delete("/:id", deleteForm)

router.put("/:id", updateForm)

// router.delete("/:id", DeleteUser);
export default router;