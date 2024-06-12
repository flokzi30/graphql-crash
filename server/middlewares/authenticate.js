const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).send('Unauthorized: Invalid token');
            } else {
                req.user = decoded;
                next();
            }
        });
    } else {
        return res.status(401).send('Unauthorized: No token provided');
    }
};

module.exports = authenticate;
