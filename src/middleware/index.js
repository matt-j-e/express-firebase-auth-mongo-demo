const admin = require('../config/firebase');

class Middleware {
  async decodeToken(req, res, next) {
    let token = "";
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
    } else {
      return res.json({ message: 'Unauthorized'});
    }
    

    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      console.log("Decoded token:", decodedToken);
      if (decodedToken) {
        return next();
      }
      return res.json({ message: 'Unauthorized'});

    } catch (e) {
      console.log(e.code, e.message);
      return res.json({ message: 'Unauthorized'});
    }
    
  }
}

module.exports = new Middleware();