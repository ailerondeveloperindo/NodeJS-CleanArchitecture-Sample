const bcrypt = require('../encryption/bcrypt/bcryptEncryption');
const sha256 = require('./sha256/sha256Encryption')

class Encryption
{
    constructor( config )
    {
        this._config = config;
    }

    GetEncryptAlgo()
    {
        if( this._config.encryption === 'bcrypt' )
        {
            return bcrypt;
        }
        else if( this._config.encryption === 'sha256' )
        {
            return sha256;
        }
    }
}

module.exports = Encryption;