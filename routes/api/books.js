import { BOOKS } from '../../Books.js';
import express from 'express';
import * as uuid from 'uuid';
import { router as reviewsRouter } from './reviews.js';

const router = express.Router();

router.use(
  '/:bookId/reviews',
  (req, res, next) => {
    const bookId = req.params.bookId;
    const book = BOOKS.find((b) => b.id == bookId);
    if (book) {
      req.book = book;
      next();
    } else {
      res.status(404).json({ message: `No existing book with id ${bookId}.` });
    }
  },
  reviewsRouter,
);

router.get('/', (req, res) => {
  res.json(BOOKS);
});

router.get('/:bookId', (req, res, next) => {
  const id = req.params.bookId;
  const book = BOOKS.find((b) => b.id == id);
  if (book) {
    res.json(book);
    next();
  } else {
    res.status(404).json({ message: `book ${id} not found.` });
  }
});

export { router };
