import { BOOKS } from '../../Books.js';
import express from 'express';
import * as uuid from 'uuid';
import { router as reviewsRouter } from './reviews.js';

function getBook(req, res, next) {
  const bookId = req.params.bookId;
  const book = BOOKS.find((b) => b.id == bookId);
  if (book) {
    req.book = book;
    next();
    res.json(book);
  } else {
    res.status(404).json({ message: `No existing book with id ${bookId}.` });
  }
}

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
  res.json(BOOKS);
});

router.get('/:bookId', getBook);

router.post('/', (req, res) => {
  const newBook = {
    id: uuid.v4(),
    reviews: req.body.reviews || [],
    ...req.body,
  };

  if (!newBook.title) {
    return res.status(400).json({ message: 'Please include book title' });
  }

  BOOKS.push(newBook);
  res.json(BOOKS);
});

router.put('/:bookId', (req, res) => {
  const id = req.params.bookId;
  const book = BOOKS.findIndex((b) => b.id == id);
  if (book !== -1) {
    if (!req.body.title) {
      return res.status(400).json({ message: 'Please include book title' });
    }
    BOOKS[book] = { ...BOOKS[book], ...req.body };
    res.json(BOOKS);
  } else {
    res.status(400).json({ message: `No book with the id of ${id}.` });
  }
});

router.delete('/:bookId', (req, res) => {
  const id = req.params.bookId;
  const index = BOOKS.findIndex((b) => b.id == id);
  if (index !== -1) {
    BOOKS.splice(index, 1);
    res.json(BOOKS);
  } else {
    res.status(400).json({ message: `No book with the id of ${id}.` });
  }
});

router.use('/:bookId/reviews', getBook, reviewsRouter);

export { router };
