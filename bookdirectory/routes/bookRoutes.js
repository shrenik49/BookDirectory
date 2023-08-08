const express = require('express');
const { getAllBooks, createBook } = require('../controllers/bookController');
const router = express.Router();
// get all the books
router.get('/books', getAllBooks);
router.post('/book', createBook);
// Add update and delete routes
module.exports = router