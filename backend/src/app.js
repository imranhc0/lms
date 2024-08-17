import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//setting some necessary middlewares
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());

import userRouter from "./routes/user.router.js";

app.use("/api/v1/users", userRouter);

export { app };