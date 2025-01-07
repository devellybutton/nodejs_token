const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY || 'secret';

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; 

    if (!token) {
        return res.status(403).json({ message: '토큰 없음' });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: '토큰이 유효하지 않음' });
        }

        // 클라이언트의 IP와 장치 정보가 토큰에 포함된 정보와 일치하는지 확인
        const clientIp = req.ip || req.connection.remoteAddress;
        const clientDevice = req.get('User-Agent');

        console.log("clientIp",clientIp);
        console.log("clientDevice", clientDevice);

        if (decoded.ip !== clientIp) {
            return res.status(403).json({ message: 'IP 주소 불일치' });
        }

        if (decoded.device !== clientDevice) {
            return res.status(403).json({ message: '디바이스 불일치' });
        }

        req.user = {...decoded.user, clientIp, clientDevice};
        next();
    });
};

module.exports = authenticateToken;