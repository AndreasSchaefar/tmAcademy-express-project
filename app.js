import express from 'express';
import { router as bookRouter } from './routes/api/books.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/books', bookRouter);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
