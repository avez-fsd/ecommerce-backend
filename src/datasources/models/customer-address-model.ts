import { Table, Column, Model } from 'sequelize-typescript';
import User from './user-model';

@Table({
  tableName: 'customer_addresses',
  timestamps: true,
})
export default class CustomerAddress extends Model {

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
    field: 'address'
  })
  address?: string;

  @Column({
    field: 'state'
  })
  state?: string;

  @Column({
    field: 'city'
  })
  city?: string;

  @Column({
    field: 'pincode',
  })
  pincode?: string;

  @Column({
    field: 'created_at',
  })
  createdAt?: Date;

  @Column({
    field: 'updated_at',
  })
  updatedAt?: Date;
}

export function addressAssociations() {
    CustomerAddress.belongsTo(User)
}