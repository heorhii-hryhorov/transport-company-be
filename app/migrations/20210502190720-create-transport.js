module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Transports', {
    id: {
      allowNull: false,
      autoIncrement: true,
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    transportNumber: {
      type: Sequelize.STRING,
    },
    model: {
      type: Sequelize.STRING,
    },
    transportType: {
      type: Sequelize.ENUM('cargo', 'passenger'),
    },
    purchaseDate: {
      type: Sequelize.DATE,
    },
    mileage: {
      type: Sequelize.INTEGER,
    },
    status: {
      type: Sequelize.ENUM('available', 'unavailable'),
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('Transport'),
};
