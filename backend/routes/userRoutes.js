import express from "express";
import { login, logout, register } from "../controllers/userController.js";

const router = express.Router();

//to register a new user
router.route("/register").post(register);

//login

router.route("/login").post(login);

//logout

router.route("/logout").post(logout);

//get my profile

//change password

//forgot password

export default router;
