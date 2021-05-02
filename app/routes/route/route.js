import express from 'express';
import {
  create, deleteRoute, findAll, update,
} from '../../controllers/routeController';

const router = express.Router();

router.post('/create', create);
router.get('/', findAll);
router.put('/update/:id', update);
router.delete('/delete/:id', deleteRoute);

export default router;
