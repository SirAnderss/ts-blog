import 'reflect-metadata';

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { createConnection } from 'typeorm';

// Connect database
createConnection();

// Routes
import postRoutes from './routes/post.routes';
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';

// Initialize app
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('token', process.env.TOKEN || 'hyr-dev.me');

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

export default app;
