const bcrypt = require('bcrypt');

class BCryptEncryption
{
    /**
     * 
     * @param {*} stringToHash 
     * @returns 
     */
    async HashASync( stringToHash )
    {
        return await bcrypt.hash( stringToHash );
    }

    /**
     * 
     * @param {*} string 
     * @param {*} hashedString 
     * @returns 
     */
    async CompareAsync( string, hashedString )
    {
        return await bcrypt.compare( string, hashedString )
    }
}

module.export = new BCryptEncryption();