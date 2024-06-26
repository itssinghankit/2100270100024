import express from "express";
import cors from "cors";
import createError from "http-errors";
import ApiError from "./utils/ApiError.js";

const app = express();
const corsConfig={
    origin: process.env.CORS_ORIGIN,
    credentials: true
};
app.use(cors(corsConfig));

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

//routes import
import userRouter from "./routes/user.routes.js";

//routes
app.use("/api/v1", userRouter);

//error generation
app.use(async (req, res, next) => {
    next(createError.NotFound());
});

app.use(async (err, req, res, next) => {
    res.status(err.status).json( new ApiError(err.status, err.message, err));
})

export { app };