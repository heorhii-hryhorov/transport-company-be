import express from 'express';
import { PORT } from '../configs/config';

const app = express();

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`Server started on port ${PORT}`);
});
