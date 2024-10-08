import dotenv from 'dotenv';
dotenv.config();
import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import User from '../app/models/User.js';
import Product from '../app/models/Product.js';
import Category from '../app/models/Category.js';

const models = [User, Product, Category];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    console.log('DATABASE_URL:', process.env.DATABASE_URL);

    this.connection = new Sequelize(process.env.DATABASE_URL, {
      dialect: 'postgres',
      logging: false,
    });

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      );
  }

  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {});
  }
}

export default new Database();
