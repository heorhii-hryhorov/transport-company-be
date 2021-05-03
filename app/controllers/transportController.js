import db from '../models';

const { Transport } = db;

export const create = (req, res) => {
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

export const findAll = (req, res) => {
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

export const update = (req, res) => {
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
    .then((num) => {
      if (num === 1) {
        res.send({
          message: 'Was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${transportId}. Maybe Tutorial was not found or req.body is empty!`,
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
        res.send({
          message: `Cannot delete with id=${transportId}. Maybe was not found!`,
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
