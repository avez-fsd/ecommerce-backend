import Order from "@datasources/models/order-model";
import User from "@datasources/models/user-model";

export default interface PaymentChannelInteface {

    getPayloadRequest(order:Order, user: User):any;
    initiatePayment():any;
    getPaymentReference():any;
    requestRefund():any;
    getPaymentStatus():any;

}