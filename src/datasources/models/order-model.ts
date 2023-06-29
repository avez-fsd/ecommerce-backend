import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  tableName: 'orders',
  timestamps: true,
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
  createdAt?: string;

  @Column({
    field: 'updated_at',
  })
  updatedAt?: string;
}
