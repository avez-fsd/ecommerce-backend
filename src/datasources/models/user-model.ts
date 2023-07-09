import { Table, Column, Model } from 'sequelize-typescript';
import CustomerAddress from './customer-address-model';

@Table({
  tableName: 'users',
  timestamps: true,
})
export default class User extends Model {

  @Column({
    field: 'id',
    primaryKey: true,
    autoIncrement: true
  })
  id?: number;

  @Column({
    field: 'email'
  })
  email?: string;

  @Column({
    field: 'name'
  })
  name?: string;

  @Column({
    field: 'password'
  })
  password?: string;

  @Column({
    field: 'created_at',
  })
  createdAt?: Date;

  @Column({
    field: 'updated_at',
  })
  updatedAt?: Date;
}

export function userAssociations() {
    User.hasMany(CustomerAddress,{
        foreignKey: 'userId'
    })
}