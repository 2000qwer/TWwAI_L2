const config = {
    port : process.env.PORT || 3000
};

/*
const crypto = require('crypto');

// Generate a random 32-byte secret key
const secret = crypto.randomBytes(32).toString('hex');
*/
const JwtSecret = "3763teg^%&465344523542345";

module.exports = {
    config : config,
    JwtSecret : JwtSecret

}