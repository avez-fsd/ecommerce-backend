import { literal } from "sequelize"
import DeliveryFee from "./models/delivery-fee-model"

export const getDeliveryFee = (price: number) =>{
 return DeliveryFee.findOne({
    where: literal(`${price} BETWEEN min_amount AND max_amount`)
 });
}