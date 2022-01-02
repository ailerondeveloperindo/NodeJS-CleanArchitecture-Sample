const BizDatabase = require('../../entities/BizDatabase');

class AddDBtoDBList
{
    constructor( bizDBRepo )
    {
        var _bizDBRepo = bizDBRepo;
    }

    async AddDBtoDBList( UUID, dbName )
    {
        var BizDBModel = new BizDatabase(null, UUID, dbName);
        return await this._bizDBRepo.Persist( BizDBModel );
    }

}

module.exports = AddDBtoDBList;