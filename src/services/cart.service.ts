import { addProductToCart, createCart, decreaseItemQty, deleteCart, getCartOfUser, getCartProductDetails, getCartProductsCount, getProductFromCart, increaseItemQty } from "@datasources/cart.datasource";
import { getDeliveryFee } from "@datasources/delivery_fee.datasource";
import Cart from "@datasources/models/cart-model";
import CartProduct from "@datasources/models/cart-product-model";
import Product from "@datasources/models/product-model";
import NotFoundException from "@exceptions/not-found.exception";
import { CartSummary, CartSummaryProduct, SaveCartRequest } from "@interfaces/cart.interface";

class CartService {

    async saveItemToCart(saveCartRequest: SaveCartRequest, userId: number): Promise<Cart | null>{
        let cart = await getCartOfUser(userId);
        if(!cart) cart = await createCart(userId);

        const product = await getProductFromCart(saveCartRequest.productId, cart.id as number);

        if(saveCartRequest.type === 'ADD'){
            if(!product) await addProductToCart(cart, saveCartRequest.productId);
            else await increaseItemQty(product);
        }else{
            if(product) {
                await decreaseItemQty(product);
                const productsCount = await getCartProductsCount(cart);
                if(productsCount === 0) {
                    await deleteCart(cart);
                    return null;
                }
            }
            else throw new NotFoundException('Product does not exist in cart!');
        }
        return cart;
    }

    async deleteItemFromCart(){

    }

    async cartSummary(cart: Cart): Promise<CartSummary>{
        const cartProducts = await getCartProductDetails(cart);
        if(cartProducts.length === 0) throw new NotFoundException('Your cart is empty!');

        const totalSellingPrice = cartProducts.reduce((total, val) => total + (Number(val.product?.sellingPrice) * Number(val.quantity)) , 0);
        const deliveryFee = await getDeliveryFee(totalSellingPrice);

        return {
            products: cartProducts.map((cartProduct) => {
                return {
                    name: cartProduct.product?.name,
                    mrp: Number(cartProduct.product?.mrp) * Number(cartProduct.quantity),
                    selling_price: Number(cartProduct.product?.sellingPrice) * Number(cartProduct.quantity),
                    discount: Number(cartProduct.product?.discount) * Number(cartProduct.quantity),
                    weight: Number(cartProduct.product?.weight) * Number(cartProduct.quantity),
                    quantity: cartProduct.quantity
                } as CartSummaryProduct
            } ),
            totalMrp: cartProducts.reduce((total, val) => total + (Number(val.product?.mrp) * Number(val.quantity)) , 0),
            totalSellingPrice,
            totalDiscount: cartProducts.reduce((total, val) => total + (Number(val.product?.discount) * Number(val.quantity)) , 0),
            totalDeliveryFee: deliveryFee?.amount as number,
            finalAmount: totalSellingPrice + Number(deliveryFee?.amount)
        }
    }

}

export default CartService;