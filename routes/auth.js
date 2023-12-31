var express = require('express');
var router = express.Router();

const {
    firmarJwt,
    verifyJwt
} = require('../controllers/auth.controller');

/* GET home page. */
router.post('/get-jwt', firmarJwtT);
router.post('/verify-jwt', verifyJwt);

module.exports = router;
