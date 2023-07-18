import { Table, Column, Model } from 'sequelize-typescript';
import Cart from './cart-model';
import Product from './product-model';

@Table({
  tableName: 'cart_products',
  timestamps: true,
  modelName: 'cartProduct'
})

export default class CartProduct extends Model {

  @Column({
    field: 'id',
    primaryKey: true,
    autoIncrement: true
  })
  id?: number;

  @Column({
    field: 'cart_id'
  })
  cartId?: number;

  @Column({
    field: 'product_id'
  })
  productId?: number;

  @Column({
    field: 'quantity'
  })
  quantity?: number;

  @Column({
    field: 'created_at',
  })
  createdAt?: Date;

  @Column({
    field: 'updated_at',
  })
  updatedAt?: Date;

  product?: Product;
}

export const cartProductAssociations = () => {
    CartProduct.belongsTo(Cart,{
        foreignKey: 'cart_id'
    })
    CartProduct.belongsTo(Product,{
        foreignKey:'productId'
    })
}
