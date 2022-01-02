const BizDatabase = require('../../entities/BizDatabase');

class RemoveFromDBList
{
    constructor( bizDBRepo )
    {
        var _bizDBRepo = bizDBRepo;
    }

    async RemoveFromDBList( DBID )
    {
        var BizDBModel = new BizDatabase(DBID, null, null);
        return await this._bizDBRepo.Remove( BizDBModel );
    }

}

module.exports = RemoveFromDBList;