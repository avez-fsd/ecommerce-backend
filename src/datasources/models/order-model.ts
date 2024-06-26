import { Table, Column, Model } from 'sequelize-typescript';
import OrderDetail from './order-detail-model';
import Payment from './payment-model';
import User from './user-model';

@Table({
  tableName: 'orders',
  timestamps: true,
  modelName: 'order'
})
export default class Order extends Model {

  @Column({
    field: 'id',
    primaryKey: true,
    autoIncrement: true
  })
  id?: number;

  @Column({
    field: 'order_no'
  })
  orderNo?: string;

  @Column({
    field: 'user_id'
  })
  userId?: number;

  @Column({
    field: 'order_status_id'
  })
  orderStatusId?: number;

  @Column({
    field: 'payment_id'
  })
  paymentId?: number;

  @Column({
    field: 'total_amount'
  })
  totalAmount?: number;

  @Column({
    field: 'total_delivery_fee',
  })
  totalDeliveryFee?: number;

  @Column({
    field: 'created_at',
  })
  createdAt?: Date;

  @Column({
    field: 'updated_at',
  })
  updatedAt?: Date;
}

export function orderAssociations() {
    Order.hasMany(OrderDetail,{
        foreignKey: 'parent_order_id'
    })

    Order.hasOne(Payment,{
        foreignKey:'parent_order_id'
    })

    Order.belongsTo(User, {
      foreignKey:'user_id'
    })
}