const User = require('../models/User');
var jwt = require("jsonwebtoken");
const config = require('config');

verifyToken = async(req, res, next) => {
    let token = req.headers["authorization"];

    console.log(req.headers);

    if (!token) {
      return res.status(403).send({ message: "No token provided!" });
    }
  
    jwt.verify(token, config.get('secret'), async (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: "Unauthorized!" });
      }
      const user = await User.findById(decoded.id).exec();
      
      req.user = user;
      next();
    });
  };

module.exports = { 
    verifyToken
}