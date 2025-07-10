import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import connectedToDB from './config/databaseConfig/databaseConfig';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { rateLimit } from 'express-rate-limit';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const APP_NAME: string = process.env.APP_NAME || 'HumanResourceManagementSystem';
const APP_HOST: string = process.env.APP_HOST || 'localhost';
const APP_PORT: string | number = parseInt(process.env.APP_PORT || '8080', 10);
const API_VERSION: string | number = process.env.API_VERSION || 'v1';
const APP_OWNER: string = process.env.APP_OWNER || 'NodeHRMS';
if (process.env.NODE_ENV as string === 'development') {
    app.use(morgan('dev'));
}
app.use(cors({
    origin: process.env.FRONTEND_URL as string || '*',
    credentials: true,
}));
app.use(helmet());
app.use(compression());
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
});
app.use(limiter);
//test API endpoint
app.get('/api/v1/test', (_req, res) => {
    return res.status(200).send('Hello world');
});
async function serve() {
    try {
        await connectedToDB(),
            app.listen(APP_PORT, () => {
                console.log(`Server is called ${APP_NAME} running on ${APP_HOST}/ on port ${APP_PORT} on /api/${API_VERSION} owned by ${APP_OWNER}...`);
            });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Failed to connect to DB..", {
                error: error.message,
                stack: error.stack,
                timestamp: new Date(0).toISOString(),
            });
        } else {
            console.error("An unknown error occured!", {
                timestamp: new Date(0).toISOString(),
            })
        }
        process.exit(1);
    }
}
serve();