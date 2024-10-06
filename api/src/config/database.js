// import 'dotenv/config';
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'devburger',
  define: {
    underscored: true,
    underscoredAll: true,
  },
};
