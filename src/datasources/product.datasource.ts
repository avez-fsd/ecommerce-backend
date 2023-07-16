import Product from "./models/product-model"


export const getProductById = (productId:number) =>{
    return Product.findByPk(productId);
}