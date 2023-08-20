import { getCartWithProducts } from "@datasources/cart.datasource";
import InvalidRequestException from "@exceptions/invalid-request.exception";
import OrderBaseService from "./base/order-base.service";
import Cart from "@datasources/models/cart-model";
import CartProduct from "@datasources/models/cart-product-model";
import { createChildOrders, createParentOrder, updateParentOrderNo } from "@datasources/order.datasource";
import Order from "@datasources/models/order-model";
import uniqid from 'uniqid';

class OrderService extends OrderBaseService {

    async createOrder(userId: number): Promise<Order> {

        const cart = await getCartWithProducts(userId);
        if(!cart) throw new InvalidRequestException("Cart products are empty. Cannot create an order.");

        const parentOrder = await this.createParentOrder(cart[0]);
        
        await this.createChildOrders(cart[0], parentOrder);

        return parentOrder;
    }

    genParentOrderPayload(cart: Cart) {
        const totalSellingPrice = this.getTotalSellingPrice(cart.cartProducts as CartProduct[]);
        const deliveryFee = this.getDeliveryFee(totalSellingPrice);
        return {
            userId: cart.userId,
            orderStatusId: 1,
            totalAmount: totalSellingPrice + (Number(deliveryFee) * Number(cart.cartProducts?.length)),
            deliveryFee: deliveryFee as number * Number(cart.cartProducts?.length)
        }
    }

    genChildOrderPayload(cart: Cart, parentOrder: Order) {
        const totalSellingPrice = this.getTotalSellingPrice(cart.cartProducts as CartProduct[]);
        const deliveryFee = this.getDeliveryFee(totalSellingPrice);
        return cart.cartProducts?.map((cartProduct)=>{
            return {
                orderNo: uniqid(),
                mrp: Number(cartProduct.product?.mrp) * Number(cartProduct.quantity),
                sellingPrice: Number(cartProduct.product?.sellingPrice) * Number(cartProduct.quantity),
                discount: Number(cartProduct.product?.discount) * Number(cartProduct.quantity),
                deliveryFee,
                parentOrderId: parentOrder.id,
                orderStatusId: 1,
                productId: cartProduct.product?.id,
                productName: cartProduct.product?.name,
                quantity: cartProduct.product?.quantity,
                totalPrice: (Number(cartProduct.product?.sellingPrice) * Number(cartProduct.quantity)) + Number(deliveryFee),
                userId: cart.userId
            }
        })
    }

    async createParentOrder(cart: Cart) {
        const parentOrderPayload = this.genParentOrderPayload(cart);
        const order = await createParentOrder(parentOrderPayload);
        await updateParentOrderNo(order);
        return order;
    }

    async createChildOrders(cart: Cart, parentOrder: Order) {
        const childOrderPayload = this.genChildOrderPayload(cart, parentOrder);
        return createChildOrders(childOrderPayload);
    }
}

export default OrderService;