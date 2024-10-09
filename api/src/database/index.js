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
    if (!process.env.DATABASE_PUBLIC_URL) {
      throw new Error(
        'DATABASE_URL is not defined in the environment variables.',
      );
    }

    this.connection = new Sequelize(process.env.DATABASE_PUBLIC_URL, {
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
    this.mongoConnection = mongoose.connect(process.env.MONGO_PUBLIC_URL);
  }
}

export default new Database();
