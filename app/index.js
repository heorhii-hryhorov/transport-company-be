import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../configs/swaggerConfig';
import { API_BASE_URL, API_CLIENT, PORT } from '../configs/config';
import router from './routes';

const corsOptions = {
  origin: API_CLIENT,
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));

app.use(router);
app.use(`${API_BASE_URL}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.listen(PORT, () => {
  /* eslint-disable-next-line no-console */
  console.log(`Server started on port ${PORT}`);
});
