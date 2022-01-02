const BizDatabase = require('../../entities/BizDatabase');

class GenerateDB
{
    constructor( bizDBRepo )
    {
        var _bizDBRepo = bizDBRepo;
    }

    async GenerateDB( UUID, dbName )
    {
        var BizDBModel = new BizDatabase(null, UUID, dbName);
        return await this._bizDBRepo.CreateDB( BizDBModel );
    }

}

module.exports = GenerateDB;