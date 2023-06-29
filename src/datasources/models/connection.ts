import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import Order from './order-model';
import OrderDetail from './order-detail-model';
import Category from './category-model';
import Commission from './commission-model';
import CustomerAddress from './customer-address-model';
import DeliveryFee from './delivery-fee-model';
import OrderStatus from './order-status-model';
import OrderStatusLog from './order-status-log-model';
import Payment from './payment-model';
import PaymentStatusLog from './payment-status-log-model';
import Product from './product-model';

const dbConnectionOptions: SequelizeOptions = {
  dialect: 'mysql',
  host: process.env.DB_HOST,
  port: (process.env.DB_PORT || 3306) as number,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  logging: process.env.NODE_ENV === 'local' ? console.log : false
};

const dbConnection = new Sequelize(dbConnectionOptions);
dbConnection.addModels(
  [
    Order,
    OrderDetail,
    Category,
    Commission,
    CustomerAddress,
    DeliveryFee,
    OrderStatus,
    OrderStatusLog,
    Payment,
    PaymentStatusLog,
    Product
  ]
);

