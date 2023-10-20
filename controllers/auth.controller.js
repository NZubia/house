const jwt = require('jsonwebtoken');
const {
    config
} = require('../config/config');
async function firmarJwt(req, res){
    try {
        const nuevoToken = await jwt.sign(
            {email: "nzubiahdz@gmail.com"},
            config.auth.secretKey,
            {algorithm: 'HS256'}
        );
        res.status(200).json({ message: "OK",  jwt: nuevoToken});
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error al crear token jwt"})
    }
}

async function verifyJwt(req, res){
    const headerToken = req.headers.authorization;
    console.log(headerToken);
    res.status(200);
}


module.exports = {
    firmarJwt,
    verifyJwt
}
