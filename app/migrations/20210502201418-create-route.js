module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Routes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    startCity: {
      type: Sequelize.STRING,
    },
    endCity: {
      type: Sequelize.STRING,
    },
    distance: {
      type: Sequelize.INTEGER,
    },
    departureDate: {
      type: Sequelize.DATE,
    },
    transportType: {
      type: Sequelize.ENUM('cargo', 'passenger'),
    },
    revenue: {
      type: Sequelize.INTEGER,
    },
    arrivalDate: {
      type: Sequelize.DATE,
    },
    transportId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Transports',
        key: 'id',
      },
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('Route'),
};
