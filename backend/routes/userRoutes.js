import express from "express";
import {
  addToPlaylist,
  forgotPassword,
  getMyProfile,
  login,
  logout,
  register,
  removeFromPlaylist,
  resetPassword,
  updatePassword,
  updateProfile,
  updateProfilePicture,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

//to register a new user
router.route("/register").post(register);

//login

router.route("/login").post(login);

//logout

router.route("/logout").get(logout);

//get my profile

router.route("/profile").get(isAuthenticated, getMyProfile);

//change password
router.route("/updatepassword").put(isAuthenticated, updatePassword);

//update profile
router.route("/updateprofile").put(isAuthenticated, updateProfile);

//update profile
router
  .route("/updateprofilepicture")
  .put(isAuthenticated, updateProfilePicture);

//forgot password

router.route("/forgotpassword").post(forgotPassword);

//reset password

router.route("/resetpassword/:token").put(resetPassword);

//add to playlist

router.route("/addtoplaylist").post(isAuthenticated, addToPlaylist);

//remove from playlist

router.route("/removefromplaylist").delete(isAuthenticated, removeFromPlaylist);

export default router;
