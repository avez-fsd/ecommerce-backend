import { literal } from "sequelize"
import DeliveryFee from "./models/delivery-fee-model"
import DeliveryFeeConfigMemory from "./in-memory/delivery-fee-config.memory";

export const getDeliveryFee = (price: number) =>{
 return DeliveryFee.findOne({
    where: literal(`${price} BETWEEN min_amount AND max_amount`)
 });
}

export const getAllDeliveryFee = () => {
    return DeliveryFee.findAll();
}

export const getDeliveryFeeMemoryByPrice = (price: number) =>{
    return DeliveryFeeConfigMemory.deliveryFee.find((fee) => price >= Number(fee.minAmount) && price <= Number(fee.maxAmount))
}