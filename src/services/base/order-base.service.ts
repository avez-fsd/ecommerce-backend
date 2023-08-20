import { getDeliveryFeeMemoryByPrice } from "@datasources/delivery_fee.datasource";
import CartProduct from "@datasources/models/cart-product-model";

class OrderBaseService {

    getTotalSellingPrice(cartProducts: CartProduct[]) {
        return cartProducts.reduce((total, val) => total + (Number(val.product?.sellingPrice) * Number(val.quantity)) , 0);
    }

    getTotalMrp(cartProducts: CartProduct[]) {
        return cartProducts.reduce((total, val) => total + (Number(val.product?.mrp) * Number(val.quantity)) , 0);
    }

    getTotalDiscount(cartProducts: CartProduct[]) {
        return cartProducts.reduce((total, val) => total + (Number(val.product?.discount) * Number(val.quantity)) , 0);
    }

    getDeliveryFee(finalPrice: number) {
        return getDeliveryFeeMemoryByPrice(finalPrice)?.amount;
    }
}

export default OrderBaseService;