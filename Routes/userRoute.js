import express from "express";
import { registerUser, loginUser } from "../Controllers/userController.js"; // destructure the imports

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

export default userRouter;
