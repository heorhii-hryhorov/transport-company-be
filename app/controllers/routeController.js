import db from '../models';

const { Route } = db;

export const create = (req, res) => {
  const route = {
    startCity: req.body.startCity,
    endCity: req.body.endCity,
    distance: req.body.distance,
    departureDate: req.body.departureDate,
    transportType: req.body.transportType,
    revenue: req.body.revenue,
    arrivalDate: req.body.arrivalDate,
    status: req.body.status,
  };

  Route.create(route)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred',
      });
    });
};

export const findAll = (req, res) => {
  Route.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred',
      });
    });
};

export const update = (req, res) => {
  const { routeId } = req.params;

  const route = {
    startCity: req.body.startCity,
    endCity: req.body.endCity,
    distance: req.body.distance,
    departureDate: req.body.departureDate,
    transportType: req.body.transportType,
    revenue: req.body.revenue,
    arrivalDate: req.body.arrivalDate,
    status: req.body.status,
  };

  Route.update(route, {
    where: { id: routeId },
  })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: 'Was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update record with id=${routeId}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred',
      });
    });
};

export const deleteRoute = (req, res) => {
  const { routeId } = req.params;
  Route.destroy({
    where: { id: routeId },
  })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: 'Deleted successfully!',
        });
      } else {
        res.send({
          message: `Cannot delete with id=${routeId}. Maybe was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred',
      });
    });
};
