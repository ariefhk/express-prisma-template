import express from "express";
import { rateLimiterMiddleware } from "../middleware/rate-limiter-middleware.js";
import { AuthController } from "../controller/auth-controller.js";

const publicRouter = express.Router();
const authRoute = "/api/auth";

publicRouter.post(authRoute + "/login", rateLimiterMiddleware, AuthController.login);
publicRouter.post(authRoute + "/register", rateLimiterMiddleware, AuthController.register);

export { publicRouter };
