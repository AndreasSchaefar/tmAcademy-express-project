import express from 'express';
import * as uuid from 'uuid';
import { BOOKS } from '../../Books.js';

const router = express.Router({ mergeParams: true });

router
  .get('/', (req, res) => {
    const bookId = req.params.bookId;
    const book = BOOKS.find((b) => b.id == bookId);
    if (!book.reviews) {
      return res.status(404).json({
        message: `Book with id ${bookId} does not have reviews yet.`,
      });
    }
    return res.json(book.reviews);
  })
  .get('/:reviewId', (req, res) => {
    const bookId = req.params.bookId;
    const book = BOOKS.find((b) => b.id == bookId);
    const reviewId = req.params.reviewId;
    const review = book.reviews.find((r) => r.id == reviewId);
    if (!review) {
      return res.status(404).json({
        message: `Review with id ${bookId} does not exist on book with id ${reviewId}.`,
      });
    }
    res.json(review);
  });

router
  .post('/', (req, res) => {
    const bookId = req.params.bookId;
    const book = BOOKS.find((b) => b.id == bookId);
    const review = {
      id: uuid.v4(),
      comment: req.body.comment,
    };

    if (!review.comment) {
      return res
        .status(400)
        .json({ message: 'Please include non-empty comment' });
    }

    book.reviews.push(review);
    return res.json(book.reviews);
  })
  .delete('/:reviewId', (req, res) => {
    const bookId = req.params.bookId;
    const book = BOOKS.find((b) => b.id == bookId);
    const reviewId = req.params.reviewId;
    const reviewIndex = book.reviews.findIndex((r) => r.id == reviewId);
    if (reviewIndex === -1) {
      return res.status(400).json({
        message: `Review with id ${reviewId} does not exist on book with id ${bookId}`,
      });
    }
    book.reviews.splice(reviewIndex, 1);
    return res.json(book.reviews);
  });

export { router };
