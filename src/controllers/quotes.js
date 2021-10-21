const quotes = [
  {
    id: 1,
    name: "Gandalf",
    quote: "All we have to do, Frodo, is decide what to do with the time that's given to us."
  },
  {
    id: 2,
    name: "Yoda",
    quote: "Train yourself to let go of everything you fear to lose."
  },
  {
    id: 3,
    name: "Steve Jobs",
    quote: "Your time is limited, so don't waste it living someone else's life."
  }
];

exports.getQuotes = (req, res) => {
  res.json(quotes);
};