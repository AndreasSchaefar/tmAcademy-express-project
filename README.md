# TechMagic Academy - Express project

## Table of contents

- [Overview](#overview)
  - [The project](#project-requirements)
  - [How to use it](#how-to-use-it)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Resources](#resources)

## Overview

### The challenge

Create simple server for "Books and review for books" application using ExpressJs.

### Project Requirements

- [x] Create simple folder architecture( You can use any of mentioned on lecture )
- [x] Create App-level Middlewares
- [x] Body parsing
- [x] Error handling(appropriate StatusCodes)
- [x] 3rd-party (optional)
- [x] Create router-level Middlewares:
- [x] Validate if book exist
- [x] Validate if review exist
- [x] Create Middleware for specific route
- [x] Actions:
  1. [x] create book
  2. [x] receive list of books
  3. [x] receive book by id
  4. [x] edit book title
  5. [x] add review for a book
  6. [x] delete review by id
  7. [x] receive list of reviews

### How to use it

To start the app use command `node run server`

If everything is correct it will log a message:

`Serving html on port: 3000`

Next steps:

- Open a browser and go to http://localhost:3000/api/books or send a GET request via Postman to retrieve a list of books
- To get the book with a known id just append it to the end of request URL like so: http://localhost:3000/api/books/some_book_id
- To get the list reviews for a book with a known id: http://localhost:3000/api/books/some_book_id/reviews
- To get specific review with a known id: http://localhost:3000/api/books/some_book_id/reviews/some_review_id

## My process

### Built with

- [Node.js](https://nodejs.org/)
- [Express](https://www.npmjs.com/package/express)
- [uuid](https://www.npmjs.com/package/uuid)
- [nodemon](https://www.npmjs.com/package/nodemon)

### Resources

1. [Express Crash Course, Video by Traversy Media, YouTube](https://www.youtube.com/watch?v=L72fhGm1tfE)
2. [javascript - Passing variables to the next middleware using next() in Express.js - Stack Overflow](https://stackoverflow.com/questions/18875292/passing-variables-to-the-next-middleware-using-next-in-express-js)
3. [Nested Routes Express, Github Gist](https://gist.github.com/zcaceres/f38b208a492e4dcd45f487638eff716c)
4. [Express API Documentation](https://expressjs.com/en/api.html#express.json)
5. [Using Express middleware](https://expressjs.com/en/guide/using-middleware.html#middleware.application)
6. [Learn Express Middleware in 14 Minutes, Video by Web Dev Simplified, Youtube](https://www.youtube.com/watch?v=lY6icfhap2o)
