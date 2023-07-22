import Cart from "./models/cart-model"
import CartProduct from "./models/cart-product-model";
import Product from "./models/product-model";


export const getCartOfUser = (userId: number) =>{
    return Cart.findOne({
        where: {
            userId
        }
    });
}

export const createCart = (userId: number) => {
    return Cart.create({
        userId
    });
}

export const getProductFromCart = (productId: number, cartId: number) => {
    return CartProduct.findOne({
        where:{
            productId,
            cartId
        }
    })
}

export const addProductToCart = (cart: Cart, productId: number) =>{
    return cart.$create('cartProduct', {
            productId: productId,
            quantity: 1
        }
    );
}

export const increaseItemQty = (cartProduct: CartProduct) => {
    cartProduct.quantity = (cartProduct.quantity as number) + 1;
    return cartProduct.save();
}

export const deleteCart = (cart: Cart) => {
    return cart.destroy();
}

export const deleteCartItem = (cartProduct: CartProduct) => {
    return cartProduct.destroy();
}

export const decreaseItemQty = async (cartProduct: CartProduct) => {
    if(cartProduct.quantity === 1) return deleteCartItem(cartProduct);

    cartProduct.quantity = (cartProduct.quantity as number) - 1;
    return cartProduct.save();
    
}

export const getCartProductsCount = async (cart: Cart) =>{
    return cart.$count('cartProducts');
}

export const getCartProductDetails = (cart: Cart) => {
    return cart.$get('cartProducts',{
        include: {
            model: Product,
            required: true,
            as: 'product'
        }
    })
}

export const deleteCartItemByCartId = (productId: number, cartId: number) => {
    return CartProduct.destroy({
        where:{
            cartId,
            productId
        }
    })
}