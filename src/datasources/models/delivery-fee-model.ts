import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  tableName: 'delivery_fees',
  timestamps: true,
})
export default class DeliveryFee extends Model {

  @Column({
    field: 'id',
    primaryKey: true,
    autoIncrement: true
  })
  id?: number;

  @Column({
    field: 'min_amount'
  })
  minAmount?: number;

  @Column({
    field: 'max_amount'
  })
  maxAmount?: number;

  @Column({
    field: 'amount'
  })
  amount?: number;

  @Column({
    field: 'created_at',
  })
  createdAt?: Date;

  @Column({
    field: 'updated_at',
  })
  updatedAt?: Date;
}
