import express from 'express';
import {
  createRoute, deleteRoute, findAllRoutes, updateRoute,
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
 *        500:
 *          $ref: '#/components/responses/InternalServerError'
 */
router.get('/', findAllRoutes);

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
 *        500:
 *          $ref: '#/components/responses/InternalServerError'
 */
router.post('/create', createRoute);

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
 *        500:
 *          $ref: '#/components/responses/InternalServerError'
 */
router.put('/update/:routeId', updateRoute);

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
 *        500:
 *          $ref: '#/components/responses/InternalServerError'
 */
router.delete('/delete/:routeId', deleteRoute);

export default router;
