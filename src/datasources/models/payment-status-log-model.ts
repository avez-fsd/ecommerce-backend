import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  tableName: 'payment_status_log',
  timestamps: true,
})
export default class PaymentStatusLog extends Model {

  @Column({
    field: 'id',
    primaryKey: true,
    autoIncrement: true
  })
  id?: number;

  @Column({
    field: 'payment_id'
  })
  paymentId?: number;

  @Column({
    field: 'payment_status_id'
  })
  paymentStatusId?: number;

  @Column({
    field: 'created_at',
  })
  createdAt?: string;

  @Column({
    field: 'updated_at',
  })
  updatedAt?: string;
}
