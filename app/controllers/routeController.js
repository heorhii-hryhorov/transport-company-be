import db from '../models';

const { Route } = db;

export const create = (req, res) => {
  const route = {
    startCity: req.body['start-city'],
    endCity: req.body['end-city'],
    distance: req.body.distance,
    departureDate: req.body['departure-date'],
    transportType: req.body['transport-type'],
    revenue: req.body.revenue,
    arrivalDate: req.body['arrival-date'],
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
  const { id } = req.params;

  const route = {
    startCity: req.body['start-city'],
    endCity: req.body['end-city'],
    distance: req.body.distance,
    departureDate: req.body['departure-date'],
    transportType: req.body['transport-type'],
    revenue: req.body.revenue,
    arrivalDate: req.body['arrival-date'],
    status: req.body.status,
  };

  Route.update(route, {
    where: { id },
  })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: 'Was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update record with id=${id}.`,
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
  const { id } = req.params;

  Route.destroy({
    where: { id },
  })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: 'Deleted successfully!',
        });
      } else {
        res.send({
          message: `Cannot delete with id=${id}. Maybe was not found!`,
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
