import express from "express";
import {
  getAllCategory,
  addCategory,
  editCategory,
  deleteCategory,
} from "./../controllers/category";

const router = express.Router();

//get all category
router.get("/", getAllCategory);

//Add category
router.post("/", addCategory);

//Edit category
router.put("/:categoryId", editCategory);

//Delete category
router.delete("/:categoryId", deleteCategory);

export default router;
