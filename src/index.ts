import express, { Request, Response } from 'express';
import cors from "cors";
import { errorHandler, invalidRoute } from "./core/helpers/errorHandler";
import "./core/db/connection";
import { clusterInit } from './core/helpers/clusters';

const app = express();
const port = 4000;

app.use( express.urlencoded({extended: false}) )
app.use( cors() );

// app.use('/api', require('./app/route'));
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.use( invalidRoute );
app.use( errorHandler );

clusterInit( app, port );