import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  tableName: 'commissions',
  timestamps: true,
  modelName: 'commission'
})
export default class Commission extends Model {

  @Column({
    field: 'id',
    primaryKey: true,
    autoIncrement: true
  })
  id?: number;

  @Column({
    field: 'commission_percentage'
  })
  commissionPercentage?: number;

  @Column({
    field: 'created_at',
  })
  createdAt?: Date;

  @Column({
    field: 'updated_at',
  })
  updatedAt?: Date;
}
