import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes';

const app: Application = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use('/', router);

export default app;
