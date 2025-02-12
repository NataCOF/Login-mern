import Router from "express";
import { register, login, logout, profile } from '../controllers/auth.controller.js';
import { requireAuth } from "../middlewares/tokenValidation.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";
import { validateSchema } from "../middlewares/validator.middleware.js";

const router = Router();

router.post('/register',validateSchema(registerSchema), register);
router.post('/login',validateSchema(loginSchema), login);
router.post('/logout', logout);
router.get('/profile', requireAuth, profile);

export default router;
