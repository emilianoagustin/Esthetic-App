import express, { Application } from 'express';
// import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/index';

const app: Application = express();

app.use(express.json());
// app.use(cookieParser())
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use('/', router);

export default app;
