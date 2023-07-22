import { Request, Response } from "express";
import response from '@helpers/response.helper'
import { validateRequest } from "@helpers/validation.helper";
import { DeleteCartItemSchema, GuestCartSummary, SaveToCartSchema } from "@requests/cart.schema";
import CartService from "@services/cart.service";
import { DeleteCartItemRequest, GuestCartProduct, SaveCartRequest } from "@interfaces/cart.interface";
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
            validateRequest(DeleteCartItemSchema, req.body, req);
            
            const cart = await getCartOfUser(req.user?.id as number);
            if(!cart) throw new NotFoundException("Cart not found!");

            const cartService = new CartService();

            if(req.body.withSummary){
                await cartService.deleteItemFromCart(req.body as DeleteCartItemRequest, cart);

                const cartSummary = await cartService.cartSummary(cart);
                return response.success(req, res, cartSummary);
            }else{
                await cartService.deleteItemFromCart(req.body as DeleteCartItemRequest, cart);
            }

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
            validateRequest(GuestCartSummary, req.body, req);
            
            const cartService = new CartService();
            const cartSummary = await cartService.guestCartSummary(req.body.products as GuestCartProduct[]);

            return response.success(req, res, cartSummary);
            
        } catch (err:any) {
            console.log(err)
            return response.failed(req, res, err.message, null, err.httpCode);
        }
    }
}

export default new CartController();