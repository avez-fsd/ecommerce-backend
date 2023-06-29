import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  tableName: 'order_details',
  timestamps: true,
})
export default class OrderDetail extends Model {

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
    field: 'mrp'
  })
  mrp?: number;

  @Column({
    field: 'selling_price'
  })
  sellingPrice?: number;

  @Column({
    field: 'discount'
  })
  discount?: number;

  @Column({
    field: 'delivery_fee'
  })
  deliveryFee?: number;

  @Column({
    field: 'parent_order_id'
  })
  parentOrderId?: number;

  @Column({
    field: 'order_status_id'
  })
  orderStatusId?: number;

  @Column({
    field: 'product_id'
  })
  productId?: number;

  @Column({
    field: 'product_name'
  })
  productName?: string;

  @Column({
    field: 'quantity'
  })
  quantity?: number;

  @Column({
    field: 'shipping_address'
  })
  shippingAddress?: string;

  @Column({
    field: 'shipping_city'
  })
  shippingCity?: string;

  @Column({
    field: 'shipping_pincode'
  })
  shippingPincode?: string;

  @Column({
    field: 'shipping_state'
  })
  shippingState?: string;

  @Column({
    field: 'shipping_weight'
  })
  shippingWeight?: string;

  @Column({
    field: 'total_price'
  })
  totalPrice?: string;

  @Column({
    field: 'user_id',
  })
  userId?: number;

  @Column({
    field: 'created_at',
  })
  createdAt?: string;

  @Column({
    field: 'updated_at',
  })
  updatedAt?: string;
}
