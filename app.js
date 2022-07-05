import express from 'express';
import { router as bookRouter } from './routes/api/books.js';

const app = express();
app.use(express.json());
app.use('/api/books', bookRouter);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
