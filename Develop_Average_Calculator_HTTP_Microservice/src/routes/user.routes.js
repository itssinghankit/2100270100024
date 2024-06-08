import { Router } from "express";
import { calculator } from "../controllers/user.controller.js";

const userRouter = Router();


userRouter.get("/numbers/:numberid", calculator);


export default userRouter;