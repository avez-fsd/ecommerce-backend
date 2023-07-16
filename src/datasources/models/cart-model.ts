import { Table, Column, Model } from 'sequelize-typescript';
import CartProduct from './cart-product-model';
import User from './user-model';

@Table({
  tableName: 'carts',
  timestamps: true,
})

export default class Cart extends Model {

  @Column({
    field: 'id',
    primaryKey: true,
    autoIncrement: true
  })
  id?: number;

  @Column({
    field: 'user_id'
  })
  userId?: number;

  @Column({
    field: 'coupon_id'
  })
  couponId?: number;

  @Column({
    field: 'created_at',
  })
  createdAt?: Date;

  @Column({
    field: 'updated_at',
  })
  updatedAt?: Date;

  cartProducts?: CartProduct[];

}

export const cartAssociations = () => {
    Cart.hasMany(CartProduct,{
        foreignKey: 'cart_id',
        onDelete: 'CASCADE'
    });
    Cart.belongsTo(User,{
        foreignKey:'user_id'
    });
}
