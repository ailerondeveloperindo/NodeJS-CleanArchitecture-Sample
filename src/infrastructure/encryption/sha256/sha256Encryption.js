const crypto = require('crypto');

class Sha256Encryption
{
    /**
     * 
     * @param {*} stringToHash 
     * @returns 
     */
    Hash( stringToHash )
    {
        return crypto.createHash('sha256').update(stringToHash);
    }

    /**
     * 
     * @param {*} string 
     * @param {*} hashedString 
     * @returns Comparison : Boolean
     */
    Compare( string, hashedString )
    {
        var comparison = this.Hash( string ) == hashedString;
        return comparison;
    }
}

module.export = new Sha256Encryption();