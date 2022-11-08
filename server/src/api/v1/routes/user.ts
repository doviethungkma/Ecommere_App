import express from "express";
import {
  getAllUser,
  getUserById,
  addUser,
  editUser,
} from "./../controllers/user";

const router = express.Router();

//get all user
router.get("/", getAllUser);

//get user by id
router.get("/:userId", getUserById);

//add user
router.post("/", addUser);

//edit user
router.put("/:userId", editUser);

export default router;
