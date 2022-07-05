import express from 'express';
import * as uuid from 'uuid';
import { BOOKS } from '../../Books.js';
import { router as reviewsRouter } from './reviews.js';

const router = express.Router();

const getBook = (req, res) => {
  const id = req.params.bookId;
  const book = BOOKS.find((b) => b.id == id);
  if (book) {
    res.json(book);
  }
  return res
    .status(404)
    .json({ message: `Book with id ${id} does not exist.` });
};

router.use('/:bookId/reviews', reviewsRouter);

router
  .get('/', (req, res) => {
    try {
      res.json(BOOKS);
    } catch (e) {
      res.status(500).json({ message: 'Server failed to retrive books.' });
    }
  })
  .get('/:bookId', getBook)
  .post('/', (req, res) => {
    const book = {
      id: uuid.v4(),
      title: req.body.title,
      reviews: req.body.reviews || [],
    };

    if (!book.title) {
      return res.status(400).json({ message: 'Please include book title' });
    }

    BOOKS.push(book);
    return res.json(BOOKS);
  })
  .patch('/:bookId', (req, res) => {
    const id = req.params.bookId;
    const title = req.body.title;
    if (!title) {
      return res.status(400).json({ message: 'Please include book title' });
    }
    BOOKS.find((b) => b.id == id).title = title;
    res.json(BOOKS);
  });

export { router };
