import express from 'express';
import cors from 'cors';
import { API_CLIENT, PORT } from '../configs/config';
import db from './models';

const corsOptions = {
  origin: API_CLIENT,
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));

db.sequelize.sync({ force: true });

app.listen(PORT, () => {
  /* eslint-disable-next-line no-console */
  console.log(`Server started on port ${PORT}`);
});
