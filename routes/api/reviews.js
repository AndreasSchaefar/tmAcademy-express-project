import express from 'express';
import * as uuid from 'uuid';

const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {
  const book = req.book;
  res.json(book.reviews);
});

router.get('/:reviewId', (req, res) => {
  const reviewId = req.params.reviewId;
  const book = req.book;
  const review = book.reviews.find((r) => r.id == reviewId);
  if (review) {
    res.json(review);
  } else {
    res.status(404).json({
      message: `No comment with id ${reviewId} exists on book with id ${book.id}.`,
    });
  }
});

export { router };
