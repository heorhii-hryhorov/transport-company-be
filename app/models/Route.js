export default (sequelize, DataTypes) => {
  const Route = sequelize.define('Route', {
    startCity: DataTypes.STRING,
    endCity: DataTypes.STRING,
    distance: DataTypes.INTEGER,
    departureDate: DataTypes.DATE,
    transportType: DataTypes.ENUM('cargo', 'passenger'),
    revenue: DataTypes.INTEGER,
    arrivalDate: DataTypes.DATE,
    status: DataTypes.ENUM('awaiting', 'in progress', 'completed'),
  }, {});

  Route.associate = ({
    Transport,
  }) => {
    Route.belongsTo(Transport, { foreignKey: 'transportId' });
  };

  return Route;
};
