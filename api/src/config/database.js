import dotenv from 'dotenv';
dotenv.config();

export default {
  development: {
    dialect: 'postgres',
    url: process.env.DATABASE_PUBLIC_URL,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
};
