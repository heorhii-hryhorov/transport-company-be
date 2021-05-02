module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Transports',
    [{
      transportNumber: 'DE57 UEF',
      model: 'Scania',
      transportType: 'cargo',
      purchaseDate: '2020-08-10',
      mileage: 50000,
      status: 'available',
    }, {
      transportNumber: 'GB31 FEQ',
      model: 'Mercedes-Benz',
      transportType: 'cargo',
      purchaseDate: '2014-08-10',
      mileage: 100000,
      status: 'available',
    }, {
      transportNumber: 'FS23 FEV',
      model: 'MAN',
      transportType: 'cargo',
      purchaseDate: '2021-03-04',
      mileage: 1000,
      status: 'available',
    }, {
      transportNumber: 'FKEW FES',
      model: 'Volvo',
      transportType: 'passenger',
      purchaseDate: '2019-01-04',
      mileage: 40000,
      status: 'unavailable',
    }, {
      transportNumber: 'EWBK EWGB',
      model: 'BMW',
      transportType: 'passenger',
      purchaseDate: '2018-01-04',
      mileage: 60000,
      status: 'available',
    }], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Transports', null, {}),
};
