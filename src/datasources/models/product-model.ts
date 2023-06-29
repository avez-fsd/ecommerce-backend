import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  tableName: 'products',
  timestamps: true,
})
export default class Product extends Model {

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
    field: 'category_id'
  })
  categoryId?: number;

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
    field: 'stock'
  })
  stock?: number;

  @Column({
    field: 'weight'
  })
  weight?: number;

  @Column({
    field: 'is_active'
  })
  isActive?: number;
  
  @Column({
    field: 'created_at',
  })
  createdAt?: string;

  @Column({
    field: 'updated_at',
  })
  updatedAt?: string;
}
