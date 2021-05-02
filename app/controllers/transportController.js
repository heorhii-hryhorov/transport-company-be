import db from '../models';

const { Transport } = db;

export const create = (req, res) => {
  const transport = {
    transportNumber: req.body['transport-number'],
    model: req.body.model,
    transportType: req.body['transport-type'],
    purchaseDate: req.body['purchase-date'],
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
  const { id } = req.params;

  const transport = {
    transportNumber: req.body['transport-number'],
    model: req.body.model,
    transportType: req.body['transport-type'],
    purchaseDate: req.body['purchase-date'],
    mileage: req.body.mileage,
    status: req.body.status,
  };

  Transport.update(transport, {
    where: { id },
  })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: 'Was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`,
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
  const { id } = req.params;

  Transport.destroy({
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
