import { DataTypes } from 'sequelize';
import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  tableName: 'payment_gateway_config',
  timestamps: true,
  modelName: 'paymentGatewayConfigs'
})
export default class PGConfig extends Model {

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
    field: 'code'
  })
  code?: string;

  @Column({
    field: 'metadata',
    type: DataTypes.JSON
  })
  metatdata?: any;

  @Column({
    field: 'is_active'
  })
  isActive?: number;
  
  @Column({
    field: 'created_at',
  })
  createdAt?: Date;

  @Column({
    field: 'updated_at',
  })
  updatedAt?: Date;

  quantity?:number;
}
