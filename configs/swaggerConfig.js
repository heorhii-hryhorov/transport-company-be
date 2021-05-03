import swaggerJSDoc from 'swagger-jsdoc';
import { API_BASE_URL, PORT } from './config';

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Transport Company API",
      version: "1.0.0",
      description: "Transport Company API documentation",
      contact: {
        "name": "Hryhorov Heorhii"
      },
    },
    servers: [
      {
        url: `http://localhost:${PORT}${API_BASE_URL}`,
      },
    ],
  },
  apis: ['./app/docs/**/*.yaml', './app/routes/**/*.js'],
};

export default swaggerJSDoc(options);
