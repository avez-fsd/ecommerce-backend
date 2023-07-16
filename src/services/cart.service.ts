import { createCart, getCartOfUser, getProductFromCart } from "@datasources/cart.datasource";
import Cart from "@datasources/models/cart-model";
import CartProduct from "@datasources/models/cart-product-model";
import { SaveCartRequest } from "@interfaces/cart.interface";

class CartService {

    async saveItemToCart(cartData: SaveCartRequest, userId:number){

        let cart = await getCartOfUser(userId);
        if(!cart) cart = await createCart(userId);
        
        const product = await getProductFromCart(cartData.productId, cart.id as number);

        if(cartData.type === 'ADD'){
            if(!product) this.addProductToCart(cart, cartData.productId);
            else this.addProductQuanity(product)
        }else{
            if(product) this.removeProductQuanity(product);
        }
    }

    async addProductToCart(cart: Cart, productId:number){
        cart.$create('cartProduct',
            {
                productId: productId,
                quantity: 1
            }
        )
    }

    async addProductQuanity(cartProduct: CartProduct){
        cartProduct.quantity = (cartProduct.quantity as number) + 1;
        cartProduct.save();
    }

    async removeProductQuanity(cartProduct: CartProduct){
        if(cartProduct.quantity === 1) {
            cartProduct.destroy();
        }else {
            cartProduct.quantity = (cartProduct.quantity as number) - 1;
            cartProduct.save();
        }
    }

}

export default CartService;