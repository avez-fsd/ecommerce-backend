import authController from '@controllers/auth.controller';
import express from 'express';

const router = express.Router({ mergeParams: true });

router.post("/signup", authController.signUp.bind(authController));

router.post("/signin", authController.signIn.bind(authController));

export default router;