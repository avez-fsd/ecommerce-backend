import Cart from "./models/cart-model"
import CartProduct from "./models/cart-product-model";


export const getCartOfUser = (userId:number) =>{
    return Cart.findOne({
        where: {
            userId
        }
    });
}

export const createCart = (userId:number) => {
    return Cart.create({
        userId
    });
}

export const getProductFromCart = (productId:number, cartId: number) => {
    return CartProduct.findOne({
        where:{
            productId,
            cartId
        }
    })
}