import express, { Request, Response } from 'express';
import cors from "cors";
import { errorHandler, invalidRoute } from "./core/helpers/errorHandler";
import "./core/db/connection";
import { clusterInit } from './core/helpers/clusters';
import config from "./core/helpers/configs";
import routes from "./app/route";

const app = express();
const port = 4000;

app.use(express.json());
app.use( express.urlencoded({extended: false}) )
app.use( cors() );

app.use('/api', routes);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.use( invalidRoute );
app.use( errorHandler );

if(config.environment === "PROD") {
  clusterInit( app, port );
}
else {
  app.listen(port, () => {
    console.log(`App running on port ${port}`);
  })
}