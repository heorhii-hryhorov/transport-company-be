import express from 'express';
import {
  create, deleteTransport, findAll, update,
} from '../../controllers/transportController';

const router = express.Router();

router.post('/create', create);
router.get('/', findAll);
router.put('/update/:id', update);
router.delete('/delete/:id', deleteTransport);

export default router;
