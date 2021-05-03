import db from '../models';

const { Transport } = db;

export const createTransport = (req, res) => {
  const transport = {
    transportNumber: req.body.transportNumber,
    model: req.body.model,
    transportType: req.body.transportType,
    purchaseDate: req.body.purchaseDate,
    mileage: req.body.mileage,
    status: req.body.status,
  };

  Transport.create(transport)
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

export const findAllTransports = (req, res) => {
  Transport.findAll()
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

export const updateTransport = (req, res) => {
  const { transportId } = req.params;

  const transport = {
    transportNumber: req.body.transportNumber,
    model: req.body.model,
    transportType: req.bodytransportType,
    purchaseDate: req.body.purchaseDate,
    mileage: req.body.mileage,
    status: req.body.status,
  };

  Transport.update(transport, {
    where: { id: transportId },
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

export const deleteTransport = (req, res) => {
  const { transportId } = req.params;

  Transport.destroy({
    where: { id: transportId },
  })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: 'Deleted successfully!',
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
