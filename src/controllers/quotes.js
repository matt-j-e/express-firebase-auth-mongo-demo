// const quotes = [
//   {
//     id: 1,
//     name: "Gandalf",
//     quote: "All we have to do, Frodo, is decide what to do with the time that's given to us."
//   },
//   {
//     id: 2,
//     name: "Yoda",
//     quote: "Train yourself to let go of everything you fear to lose."
//   },
//   {
//     id: 3,
//     name: "Steve Jobs",
//     quote: "Your time is limited, so don't waste it living someone else's life."
//   }
// ];

const dbo = require('../db/conn');
const ObjectId = require('mongodb').ObjectId;

/**
 * Get all quotes
 * @param req - http request object
 * @param res - http response object
 */
exports.getQuotes = (req, res) => {
  dbo.getDb().collection('quotes')
    .find()
    .toArray()
    .then((quotes) => {
      if (quotes.length > 0) {
        res.status(200).json(quotes);
      } else {
        res.status(404).json({error: "No quotes are available"});
      }
    })
    .catch(error => console.error(error));
};


/**
 * Save a new quote
 * @param req - http request object
 * @param res - http response object 
 */
exports.saveQuote = (req, res) => {
  dbo.getDb().collection('quotes')
    .insertOne(req.body)
    .then(quote => {
      res.status(201).json(quote);
    });
};


/**
 * Update quote by _id
 * @param req - http request object
 * @param res - http response object 
 */
exports.updateQuoteById = (req, res) => {
  const id = new ObjectId(req.params.quoteId);
  dbo.getDb().collection('quotes')
    .updateOne(
      { _id: id },
      { $set: req.body }
    )
    .then(response => {
      if (response.matchedCount === 1) {
        res.status(200).json(response)
      } else {
        res.status(404).json({ error: "The target quote could not be found" })
      }
    });
};


exports.deleteQuoteById = (req, res) => {
  const id = new ObjectId(req.params.quoteId);
  dbo.getDb().collection('quotes')
    .deleteOne(
      {_id: id}
    )
    .then(response => {
      if (response.deletedCount === 1) {
        res.status(204).json(response.deletedCount)
      } else {
        res.status(404).json({error: "The target quote could not be found"})
      }
    });
};
