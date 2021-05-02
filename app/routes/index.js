import express from 'express';
import transportRouter from './transport';
import routeRouter from './route';
import { API_BASE_URL } from '../../configs/config';

const router = express.Router();

router.use(API_BASE_URL, transportRouter);
router.use(API_BASE_URL, routeRouter);

export default router;
