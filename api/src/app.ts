import express, { Application, Request } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/index.routes';
import path from 'path';
import bodyParser from 'body-parser';
import passport from 'passport';
import JWTStrategy from './libs/passport-jwt';
import { createRoles } from './libs/initialSetupRoles';
// const fileUpload = require('express-fileupload');

const app: Application = express();
createRoles();
app.set('port', process.env.PORT || 3002);
app.use(express.json());
app.use(bodyParser.json());
// app.use(fileUpload());
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));

//authentication passport (read token)
app.use(passport.initialize());
app.use(passport.session());
passport.use(JWTStrategy);
//passport.authenticate('jwt');

app.use('/', router);

// storage para guardar img en mi db
// app.use('/uploads', express.static(path.join(__dirname + 'uploads')));
app.use('/upload', express.static(path.join(__dirname + '../uploads')));

export default app;
