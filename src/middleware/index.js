const admin = require('../config/firebase');

class Middleware {
  async decodeToken(req, res, next) {
    const token = req.headers.authorization.split(" ")[1];

    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      console.log("Decoded token:", decodedToken);
      if (decodedToken) {
        return next();
      }

      return res.json({ message: 'Unauthorized'});

    } catch (e) {
      console.log(e.code, e.message);
      return res.json({ message: 'Server error'});
    }
    
  }
}

module.exports = new Middleware();