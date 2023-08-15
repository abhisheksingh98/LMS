import mongoose from "mongoose";
import validator from "validator";

const schema = new mongoose.Schema({});

export const Course = mongoose.model("Course", schema);
