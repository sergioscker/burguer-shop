'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Categories', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Categories');
  },
};

// npx/yarn sequelize migration:create --name create-category-table (criação de migration);
// npx/yarn sequelize db:migrate (rodar migration no database);
// npx/yarn sequelize db:migrate:undo:all (delete todas as migrations do banco).
// npx/yarn sequelize-cli db:migrate (subir migrations pro database).
