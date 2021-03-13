import cors from 'cors';
import express, { Express } from 'express';
import { AddressInfo } from 'net';

// Cors and Express config
const app: Express = express();
app.use(express.json());
app.use(cors());

// Server config
const server = app.listen( process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.log(`Failure upon running server`);
    }
});