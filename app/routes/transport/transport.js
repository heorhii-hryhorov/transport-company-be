import express from 'express';
import {
  create, deleteTransport, findAll, update,
} from '../../controllers/transportController';

const router = express.Router();

/**
 * @swagger
 * /transport:
 *  get:
 *    tags: [Transport]
 *    description: Get all transports from DB
 *    produces:
 *      - application/json
 *    responses:
 *        200:
 *         description: Array of Transports data
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/TransportModel'
 *        404:
 *          $ref: '#/components/responses/NotFound'
 *        403:
 *          $ref: '#/components/responses/Forbidden'
 *        401:
 *          $ref: '#/components/responses/AccessDenied'
 *        500:
 *          $ref: '#/components/responses/InternalServerError'
 */
router.get('/', findAll);

/**
 * @swagger
 * /transport/create:
 *  post:
 *    tags: [Transport]
 *    description: Create a new transport
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Transport
 *        description: Transport data
 *        schema:
 *          type: object
 *          required:
 *            - transportNumber
 *          properties:
 *            transportNumber:
 *              type: string
 *            model:
 *              type: string
 *            transportType:
 *              type: string
 *              enum: [cargo, passenger]
 *            purchaseDate:
 *              type: string
 *              format: date
 *            mileage:
 *              type: number
 *            status:
 *              type: string
 *              enum: [available, unavailable]
 *    responses:
 *        200:
 *          description: Transport created successfully.
 *        404:
 *          $ref: '#/components/responses/NotFound'
 *        403:
 *          $ref: '#/components/responses/Forbidden'
 *        401:
 *          $ref: '#/components/responses/AccessDenied'
 *        500:
 *          $ref: '#/components/responses/InternalServerError'
 */
router.post('/create', create);

/**
 * @swagger
 * /transport/update/{transportId}:
 *  put:
 *    tags: [Transport]
 *    description: Update transport in DB
 *    produces:
 *      - application/json
 *    parameters:
 *      - $ref: '#/components/parameters/transportId'
 *      - in: body
 *        name: Transport
 *        description: Transport data
 *        schema:
 *          type: object
 *          required:
 *            - transportNumber
 *          properties:
 *            transportNumber:
 *              type: string
 *            model:
 *              type: string
 *            transportType:
 *              type: string
 *              enum: [cargo, passenger]
 *            purchaseDate:
 *              type: string
 *              format: date
 *            mileage:
 *              type: number
 *            status:
 *              type: string
 *              enum: [available, unavailable]
 *    responses:
 *        200:
 *          description: Transport updated successfully.
 *        404:
 *          $ref: '#/components/responses/NotFound'
 *        403:
 *          $ref: '#/components/responses/Forbidden'
 *        401:
 *          $ref: '#/components/responses/AccessDenied'
 *        500:
 *          $ref: '#/components/responses/InternalServerError'
 */
router.put('/update/:transportId', update);

/**
 * @swagger
 * /transport/delete/{transportId}:
 *  delete:
 *    tags: [Transport]
 *    description: Removes transport DB.
 *    produces:
 *      - application/json
 *    parameters:
 *      - $ref: '#/components/parameters/transportId'
 *    responses:
 *        200:
 *          description: Transport deleted successfully.
 *        404:
 *          $ref: '#/components/responses/NotFound'
 *        403:
 *          $ref: '#/components/responses/Forbidden'
 *        401:
 *          $ref: '#/components/responses/AccessDenied'
 *        500:
 *          $ref: '#/components/responses/InternalServerError'
 */
router.delete('/delete/:transportId', deleteTransport);

export default router;
