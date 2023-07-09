import authController from '@controllers/auth.controller';
import { verifyToken } from '@middelwares/auth.middleware';
import express, { NextFunction, Request, Response } from 'express';

const router = express.Router({ mergeParams: true });

const asyncHandler = (fn:any) => (req: Request, res: Response, next: NextFunction) => fn(req, res, next).catch(next);

router.post("/signup", authController.signUp.bind(authController));

router.post("/signin", authController.signIn.bind(authController));

export default router;