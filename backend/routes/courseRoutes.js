import express from "express";
import {
  createCourse,
  getAllCourses,
} from "../controllers/courseController.js";

const router = express.Router();

//Get all courses without lectures
router.route("/courses").get(getAllCourses);

//Create new course - only admin
router.route("/createcourse").post(createCourse);

//Add video lecture, delete course, get course details

//Delete Lecture

export default router;
