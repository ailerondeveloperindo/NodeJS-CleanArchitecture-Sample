const BizDatabase = require('../../entities/BizDatabase');

class DropADB
{
    constructor( bizDBRepo )
    {
        var _bizDBRepo = bizDBRepo;
    }

    async DropADB( DBID )
    {
        var BizDBModel = new BizDatabase(DBID, null, null);
        return await this._bizDBRepo.DropDB( BizDBModel );
    }

}

module.exports = DropADB;