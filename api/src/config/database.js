import dotenv from 'dotenv';
dotenv.config();

module.exports = {
  development: {
    dialect: 'postgres',
    url: process.env.DATABASE_URL,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
};
