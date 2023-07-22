import { Op, where } from "sequelize";
import Product from "./models/product-model"


export const getProductById = (productId:number) =>{
    return Product.findByPk(productId);
}

export const getProductsByIds = (products: number[]) => {
    return Product.findAll({
        where:{
            id: {
                [Op.in]: products
            },
            isActive: 1
        }
    })
}