import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  tableName: 'categories',
  timestamps: true,
  modelName:'category'
})
export default class Category extends Model {

  @Column({
    field: 'id',
    primaryKey: true,
    autoIncrement: true
  })
  id?: number;

  @Column({
    field: 'name'
  })
  name?: string;
  
  @Column({
    field: 'created_at',
  })
  createdAt?: Date;

  @Column({
    field: 'updated_at',
  })
  updatedAt?: Date;
}
