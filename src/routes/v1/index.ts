import authController from '@controllers/auth.controller';
import cartController from '@controllers/cart.controller';
import { verifyToken } from '@middelwares/auth.middleware';
import express, { NextFunction, Request, Response } from 'express';

const router = express.Router({ mergeParams: true });

const asyncHandler = (fn:any) => (req: Request, res: Response, next: NextFunction) => fn(req, res, next).catch(next);

router.post("/signup", authController.signUp.bind(authController));

router.post("/signin", authController.signIn.bind(authController));

router.post("/cart/save",  asyncHandler(verifyToken), cartController.saveItem.bind(cartController));

router.delete("/cart/delete",  asyncHandler(verifyToken), cartController.deleteItem.bind(cartController));

router.get("/cart/summary",  asyncHandler(verifyToken), cartController.cartSummary.bind(cartController));

router.get("/guest/cart/summary", cartController.guestCartSummary.bind(cartController));

router.get("/verify", asyncHandler(verifyToken), authController.signIn.bind(authController));

export default router;