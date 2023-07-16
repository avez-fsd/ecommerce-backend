import { Request, Response } from "express";
import response from '@helpers/response.helper'

class ProductController {

    async products(req: Request, res: Response){
        try {
            // validateRequest(SignInSchema, req.body, req);
            

            return response.success(req, res);
            
        } catch (err:any) {
            return response.failed(req, res, err.message, null, err.httpCode);
        }
    }
}

export default new ProductController();