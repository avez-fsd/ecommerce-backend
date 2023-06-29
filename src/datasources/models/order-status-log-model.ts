import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  tableName: 'order_status_log',
  timestamps: true,
})
export default class OrderStatusLog extends Model {

  @Column({
    field: 'id',
    primaryKey: true,
    autoIncrement: true
  })
  id?: number;

  @Column({
    field: 'child_order_id'
  })
  childOrderId?: number;

  @Column({
    field: 'order_status_id'
  })
  orderStatusId?: number;

  @Column({
    field: 'created_at',
  })
  createdAt?: string;

  @Column({
    field: 'updated_at',
  })
  updatedAt?: string;
}
