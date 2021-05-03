import express from 'express';
import {
  create, deleteRoute, findAll, update,
} from '../../controllers/routeController';

const router = express.Router();

/**
 * @swagger
 * /route:
 *  get:
 *    tags: [Route]
 *    description: Get all routes from DB
 *    produces:
 *      - application/json
 *    responses:
 *        200:
 *         description: Array of Routes data
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/RouteModel'
 *        404:
 *          $ref: '#/components/responses/NotFound'
 *        403:
 *          $ref: '#/components/responses/Forbidden'
 *        401:
 *          $ref: '#/components/responses/AccessDenied'
 */
router.get('/', findAll);

/**
 * @swagger
 * /route/create:
 *  post:
 *    tags: [Route]
 *    description: Create a new route
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Add route
 *        description: Add route in DB.
 *        schema:
 *          $ref: '#/components/schemas/RouteModel'
 *    responses:
 *        200:
 *          description: Route created successfully.
 *        404:
 *          $ref: '#/components/responses/NotFound'
 *        403:
 *          $ref: '#/components/responses/Forbidden'
 *        401:
 *          $ref: '#/components/responses/AccessDenied'
 */
router.post('/create', create);

/**
 * @swagger
 * /route/update/{routeId}:
 *  put:
 *    tags: [Route]
 *    description: Update route in DB
 *    produces:
 *      - application/json
 *    parameters:
 *      - $ref: '#/components/parameters/routeId'
 *      - in: body
 *        name: Update Route
 *        description: Update route in DB.
 *        schema:
 *          $ref: '#/components/schemas/RouteModel'
 *    responses:
 *        200:
 *          description: Route updated successfully.
 *        404:
 *          $ref: '#/components/responses/NotFound'
 *        403:
 *          $ref: '#/components/responses/Forbidden'
 *        401:
 *          $ref: '#/components/responses/AccessDenied'
 */
router.put('/update/:routeId', update);

/**
 * @swagger
 * /route/delete/{routeId}:
 *  delete:
 *    tags: [Route]
 *    description: Removes route from DB.
 *    produces:
 *      - application/json
 *    parameters:
 *      - $ref: '#/components/parameters/routeId'
 *        schema:
 *          type: string
 *          required:
 *            - routeId
 *          properties:
 *            routeId:
 *              type: string
 *    responses:
 *        200:
 *          description: Route deleted successfully.
 *        404:
 *          $ref: '#/components/responses/NotFound'
 *        403:
 *          $ref: '#/components/responses/Forbidden'
 *        401:
 *          $ref: '#/components/responses/AccessDenied'
 */
router.delete('/delete/:routeId', deleteRoute);

export default router;
