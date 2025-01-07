const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY || 'your-secret-key';

const login = (req, res) => {
    const user = { id: 1, username: 'mockUser1' };

    // 클라이언트 IP와 User-Agent 정보 추출 
    const ip = req.ip || req.connection.remoteAddress;
    const device = req.get('User-Agent'); 

    console.log("==== User IP Address", req.ip);
    console.log("==== User Device", device);

    const token = jwt.sign(
        { 
            user,
            ip,
            device
        },
        SECRET_KEY,
        { expiresIn: '1h' }
    );

    res.json({ token });
};

module.exports = {
    login,
};