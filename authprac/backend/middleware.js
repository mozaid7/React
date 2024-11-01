const jwt = require('jsonwebtoken');
const key = process.env.Password;

const authMiddleware = (req,res,next) => {
    const authHeader = req.header.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer')) {
        res.status(403).json({});
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, key);
        req.userId = decoded.userId;
        next();
    }
    catch(e) {
        res.status(403).json({});
    }
};

module.exports = {
    authMiddleware
}