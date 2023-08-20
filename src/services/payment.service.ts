
import Order from "@datasources/models/order-model";
import PaymentBaseService from "./base/payment-base.service";
import PGConfig from "@datasources/models/pg-config-model";
import User from "@datasources/models/user-model";

class PaymentService extends PaymentBaseService {


    async requestPayment(order: Order, channel: string, pgConfig: PGConfig, user: User) {

        this.initService(channel, pgConfig);

        const payload = this.service.getPayloadRequest(order, user);

        



    }
}

export default PaymentService;