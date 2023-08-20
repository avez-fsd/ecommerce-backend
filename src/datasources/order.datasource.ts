import OrderDetail from "./models/order-detail-model";
import Order from "./models/order-model"

export const createParentOrder = (payload: any) =>{
    return Order.create(payload);
}

export const updateParentOrderNo = (order: Order) => {
    order.orderNo = `E-${order.id}`;
    return order.save();
}

export const createChildOrders = (payload: any) => {
    return OrderDetail.bulkCreate(payload);
}