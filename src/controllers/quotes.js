const quotes = [
  {
    name: "Gandalf",
    quote: "All we have to do, Frodo, is decide what to do with the time that's given to us."
  },
  {
    name: "Yoda",
    quote: "Train yourself to let go of everything you fear to lose."
  },
  {
    name: "Steve Jobs",
    quote: "Your time is limited, so don't waste it living someone else's life."
  }
];

exports.getQuotes = (req, res) => {
  res.json(quotes);
};