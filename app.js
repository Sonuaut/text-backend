import express from 'express';
import cors from 'cors';
import productsRouter from './routes/products.js';
import categoriesRouter from './routes/categories.js';

const app = express();

app.use(cors());
app.use(express.json());
// Register products API
app.use('/api/products', productsRouter);
app.use('/api/categories', categoriesRouter);

export default app; 