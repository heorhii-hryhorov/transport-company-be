import db from '../models';

const { Route, Transport } = db;

export const createRoute = (req, res) => {
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
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred',
      });
    });
};

export const findAllRoutes = (req, res) => {
  Route.findAll()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred',
      });
    });
};

export const updateRoute = (req, res) => {
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
    .then(() => {
      res.status(200).send({
        message: 'Updated successfully',
      });
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
          message: 'Deleted successfully',
        });
      } else {
        res.status(404).send({
          message: 'Not found',
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

export const assignTransport = async (req, res) => {
  const { routeId } = req.params;
  const route = {
    transportId: req.body.transportId,
  };
  const transportCount = await Transport.count({ where: { id: req.body.transportId } });
  if (!transportCount) {
    res.status(404).send({
      message: 'Not found',
    });
  }

  Route.update(route, {
    where: { id: routeId },
  })
    .then(() => {
      res.status(200).send({
        message: 'Updated successfully',
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred',
      });
    });
};
