const express = require('express');
const cors = require('cors');
const quotesController = require('./controllers/quotes');
const middleware = require('./middleware');

const app = express();
app.use(express.json());
app.use(cors());
app.use(middleware.decodeToken);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/quotes', quotesController.getQuotes);
app.post('/api/quotes', quotesController.saveQuote);
app.put('/api/quotes/:quoteId', quotesController.updateQuoteById);
app.delete('/api/quotes/:quoteId', quotesController.deleteQuoteById);

module.exports = app;