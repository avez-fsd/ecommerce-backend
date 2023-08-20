import { PAYMENT_CHANNELS } from "@constants";
import PGConfig from "@datasources/models/pg-config-model";
import PaymentChannelInteface from "@interfaces/payment-channel.interface";
import StripeService from "@services/payment-channels/stripe.service";

class PaymentBaseService {

    service!: PaymentChannelInteface;

    initService(channel:string, pgConfig: PGConfig){
        if(channel === PAYMENT_CHANNELS.STRIPE) this.service = new StripeService(pgConfig);
        else throw new Error("Invalid PG Channel!");
    }
}

export default PaymentBaseService;