import UnauthorizedException from "@exceptions/unauthorized.exception";
import jwtHelper from "@helpers/jwt.helper";
import { NextFunction, Request, Response } from "express";

export const verifyToken = async (req:Request, res: Response, next: NextFunction) =>{
  if (!req.headers.authorization) throw new UnauthorizedException("Unauthorized");
  const token = jwtHelper.extractJwtToken(req.headers.authorization);

  if(!token) throw new UnauthorizedException("Unauthorized");

  await jwtHelper.verifyToken(token);

  next();
}