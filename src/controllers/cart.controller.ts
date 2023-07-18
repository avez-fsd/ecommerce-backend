import { Request, Response } from "express";
import response from '@helpers/response.helper'
import { validateRequest } from "@helpers/validation.helper";
import { SaveToCartSchema } from "@requests/cart.schema";
import CartService from "@services/cart.service";
import { SaveCartRequest } from "@interfaces/cart.interface";
import Product from "@datasources/models/product-model";
import { getProductById } from "@datasources/product.datasource";
import NotFoundException from "@exceptions/not-found.exception";
import { getCartOfUser } from "@datasources/cart.datasource";

class CartController {

    async saveItem(req: Request, res: Response){
        try {
            validateRequest(SaveToCartSchema, req.body, req);
            
            const product = await getProductById(req.body.productId);
            if(!product) throw new NotFoundException("Product Not Found!");

            const cartService = new CartService();

            if(req.body.withSummary){
                const cart = await cartService.saveItemToCart(req.body as SaveCartRequest, req.user?.id as number);
                if(!cart) return response.success(req, res, undefined, "Your cart is empty!", 204);

                const cartSummary = await cartService.cartSummary(cart);
                return response.success(req, res, cartSummary);

            }else {
                cartService.saveItemToCart(req.body as SaveCartRequest, req.user?.id as number);
            }

            return response.success(req, res);
            
        } catch (err:any) {
            return response.failed(req, res, err.message, null, err.httpCode);
        }
    }

    async deleteItem(req: Request, res: Response){
        try {
            validateRequest(SaveToCartSchema, req.body, req);
            

            return response.success(req, res);
            
        } catch (err:any) {
            return response.failed(req, res, err.message, null, err.httpCode);
        }
    }

    async cartSummary(req: Request, res: Response){
        try {

            const cart = await getCartOfUser(req.user?.id as number);
            if(!cart) return response.success(req, res, undefined, "Your cart is empty!", 204);

            const cartService = new CartService();
            const cartSummary = await cartService.cartSummary(cart);

            return response.success(req, res, cartSummary);
            
        } catch (err:any) {
            return response.failed(req, res, err.message, null, err.httpCode);
        }
    }

    async guestCartSummary(req: Request, res: Response){
        try {
            validateRequest(SaveToCartSchema, req.body, req);
            

            return response.success(req, res);
            
        } catch (err:any) {
            return response.failed(req, res, err.message, null, err.httpCode);
        }
    }
}

export default new CartController();