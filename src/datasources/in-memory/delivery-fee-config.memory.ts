import { getAllDeliveryFee } from "@datasources/delivery_fee.datasource";
import DeliveryFee from "@datasources/models/delivery-fee-model";

export default class DeliveryFeeConfigMemory {
    static deliveryFee: DeliveryFee[];

    static async init(){
        if(!DeliveryFeeConfigMemory.deliveryFee) DeliveryFeeConfigMemory.deliveryFee = await getAllDeliveryFee();
    }
}