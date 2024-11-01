const jwt = require('jsonwebtoken');
require('dotenv').config();
const key = process.env.Password;


const authMiddleware = (req,res,next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(403).json({});
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, key);
        req.userId = decoded.userId;
        next();
    }
    catch(e) {
        return res.status(403).json({});
    }
};

module.exports = {
    authMiddleware
}