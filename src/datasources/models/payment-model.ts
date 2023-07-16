import { Table, Column, Model } from 'sequelize-typescript';
import Order from './order-model';

@Table({
  tableName: 'payments',
  timestamps: true,
})
export default class Payment extends Model {

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
    field: 'parent_order_id'
  })
  parentOrderId?: number;

  @Column({
    field: 'payment_reference_id'
  })
  paymentReferenceId?: string;

  @Column({
    field: 'payment_type'
  })
  paymentType?: string;

  @Column({
    field: 'amount'
  })
  amount?: number;

  @Column({
    field: 'commission_percentage'
  })
  commissionPercentage?: number;

  @Column({
    field: 'platform_commission',
  })
  platformCommission?: number;

  @Column({
    field: 'transfer_amount',
  })
  transferAmount?: number;

  @Column({
    field: 'created_at',
  })
  createdAt?: Date;

  @Column({
    field: 'updated_at',
  })
  updatedAt?: Date;
}

export function paymentAssociations() {
    Payment.belongsTo(Order,{
        foreignKey: 'parent_order_id'
    })
}