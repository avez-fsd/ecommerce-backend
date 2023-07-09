import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  tableName: 'order_statuses',
  timestamps: true,
})
export default class OrderStatus extends Model {

  @Column({
    field: 'id',
    primaryKey: true,
    autoIncrement: true
  })
  id?: number;

  @Column({
    field: 'status'
  })
  status?: string;
  
  @Column({
    field: 'created_at',
  })
  createdAt?: Date;

  @Column({
    field: 'updated_at',
  })
  updatedAt?: Date;
}
