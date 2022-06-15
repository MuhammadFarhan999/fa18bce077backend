import express from 'express';
import { AddSignup } from '../controllers/Signup.js';

const router = express.Router();

// router.get("/", GetUsers);

router.post("/", AddSignup);

// router.delete("/:id", DeleteUser);
export default router;