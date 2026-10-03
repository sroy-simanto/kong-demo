import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/health', (_req, res) => {
    res.status(200).json({status: 'Auth Service is Running'});
});

app.use((_req, res) => {
    res.status(404).json({message: 'Not found'});
});

app.use((err:Error, _req:Request, res:Response, _next:NextFunction) => {
    console.error(err.stack);
    res.status(500).json({message: 'Internal Server Error'});
});

const port = Number(process.env.PORT) || 4002;
const serviceName = process.env.SERVICE_NAME || 'Auth-Service';

app.listen(port, "0.0.0.0", () => {
    console.log(`${serviceName} is running on port ${port}`);
})