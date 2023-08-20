import { CURRENCY, STRIPE_GLOBAL } from "@constants";
import Order from "@datasources/models/order-model";
import PGConfig from "@datasources/models/pg-config-model";
import User from "@datasources/models/user-model";
import PaymentChannelInteface from "@interfaces/payment-channel.interface";

class StripeService implements PaymentChannelInteface {
    pgConfig: PGConfig;

    constructor(pgConfig: PGConfig){
        this.pgConfig = pgConfig;
    }

    getPayloadRequest(order: Order, user: User) {
        
    // return {
    //     mode: STRIPE_GLOBAL.MODE,
    //     line_items: [{
    //       price_data: {
    //         currency: CURRENCY,
    //         unit_amount: order.totalAmount
    //       }
    //     }],
    //     payment_intent_data: {
    //       capture_method: captureMethod,
    //       description: statement,
    //       statement_descriptor: statement,
    //       metadata: {
    //         orderId: order.orderNo
    //       }
    //     },
    //     customer_email: user.email,
    //     success_url: payload.redirectUrl,
    //     cancel_url: payload.failureRedirectionUrl || payload.redirectUrl
    //   }
    }

    initiatePayment() {
        throw new Error("Method not implemented.");
    }

    getPaymentReference() {
        throw new Error("Method not implemented.");
    }

    requestRefund() {
        throw new Error("Method not implemented.");
    }

    getPaymentStatus() {
        throw new Error("Method not implemented.");
    }
    
}

export default StripeService;