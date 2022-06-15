import express from 'express';
import { AddCart, GetCart } from '../controllers/addToCart.js';

const router = express.Router();

// router.get("/", GetCart);

router.post("/", AddCart);

// router.delete("/:id", DeleteUser);
export default router;