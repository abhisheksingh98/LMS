import express from "express";
import {
  getMyProfile,
  login,
  logout,
  register,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

//to register a new user
router.route("/register").post(register);

//login

router.route("/login").post(login);

//logout

router.route("/logout").post(logout);

//get my profile

router.route("/profile").get(isAuthenticated, getMyProfile);

//change password

//forgot password

export default router;
