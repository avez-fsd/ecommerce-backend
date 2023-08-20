import { Request, Response } from "express";
import response from '@helpers/response.helper'
import { validateRequest } from "@helpers/validation.helper";
import { PaymentRequestSchema } from "@requests/payment.schema";
import { getPGConfigByCode } from "@datasources/pg-config.datasource";
import InvalidRequestException from "@exceptions/invalid-request.exception";
import OrderService from "@services/order.service";
import PaymentService from "@services/payment.service";

class PaymentController {

    async initPayment(req: Request, res: Response) {
        try {
            validateRequest(PaymentRequestSchema, req.body, req);
            
            const pgConfig = getPGConfigByCode(req.body.channel);
            if(!pgConfig) throw new InvalidRequestException("Invalid PG Code");

            const orderService = new OrderService();
            const order = await orderService.createOrder(req.user?.id as number);

            if(!order) throw new Error("Unable to generate order. Please try again later!");

            // const paymentService = new PaymentService();
            // paymentService.initiatePayment(order)



            return response.success(req, res);
            
        } catch (err:any) {
            return response.failed(req, res, err.message, null, err.httpCode);
        }
    }

}

export default new PaymentController();