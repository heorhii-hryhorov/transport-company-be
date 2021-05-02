import express from 'express';
import routeRouter from './route';

const router = express.Router();

router.use('/route', routeRouter);

export default router;
