import 'reflect-metadata';

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { createConnection } from 'typeorm';

createConnection();
import postRoutes from './routes/post.routes';

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/posts', postRoutes);

export default app;
