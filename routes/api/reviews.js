import express from 'express';
import * as uuid from 'uuid';

const router = express.Router({ mergeParams: true });

function getReview(req, res) {
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
}

router.use(express.json());

router.get('/', (req, res) => {
  const book = req.book;
  res.json(book.reviews);
});

router.get('/:reviewId', getReview);

router.post('/', (req, res) => {
  const book = req.book;

  const newReview = {
    id: uuid.v4(),
    comment: req.body.comment,
  };

  if (!newReview.comment) {
    return res.status(400).json({ message: 'Please include comment body' });
  }

  book.reviews.push(newReview);
  res.json(book.reviews);
});

router.delete('/:reviewId', (req, res) => {
  const book = req.book;
  const id = req.params.reviewId;
  const index = book.reviews.findIndex((r) => r.id == id);
  if (index !== -1) {
    book.reviews.splice(index, 1);
    res.json(book.reviews);
  } else {
    res
      .status(400)
      .json({ message: `No existing comment with the id of ${id}.` });
  }
});

export { router };
