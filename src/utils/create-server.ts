import { config } from 'dotenv';
import cors from 'cors';
import router from '../routes/index';
import express from 'express';
import * as ErrorMiddlewares from '../middleware/errors.middleware';

config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', router);

app.use(ErrorMiddlewares.methodNotAllowed);
app.use(ErrorMiddlewares.genericErrorHandler);

export default app;
