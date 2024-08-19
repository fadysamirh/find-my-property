// imports
import express, {Request, Response, NextFunction, Router} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import http from 'http';
import { connectDB } from '../config/mongo';

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => res.send("Page Page Route"));

//amenity

const amenityRouter: Router = require('./api/routers/amenity.router');
const apartmentRouter: Router = require('./api/routers/apartment.router');

app.use('/amenity', amenityRouter);
app.use('/apartment', apartmentRouter);

app.use((req: Request, res: Response) => {
    res.status(404).send({ err: "No such url" });
});

app.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, X-Auth-Token, Accept"
    );
    next();
});

connectDB();

const port = process.env.SERVER_PORT || 4000

server.listen(port, () => console.log(`Server up and running on ${port}`));

