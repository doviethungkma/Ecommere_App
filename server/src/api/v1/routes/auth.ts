import express from "express";
import { signup, login, forgotPassword } from "./../controllers/auth";

const router = express.Router();

//signup
router.post("/signup", signup);

//login
router.post("/login", login);

//forgot password
router.post("/forgot", forgotPassword);

export default router;
