export default (sequelize, DataTypes) => {
  const Transport = sequelize.define('Transport', {
    transportNumber: DataTypes.STRING,
    model: DataTypes.STRING,
    transportType: DataTypes.ENUM('cargo', 'passenger'),
    purchaseDate: DataTypes.DATE,
    mileage: DataTypes.INTEGER,
    status: DataTypes.ENUM('available', 'unavailable'),
  }, {});

  return Transport;
};
