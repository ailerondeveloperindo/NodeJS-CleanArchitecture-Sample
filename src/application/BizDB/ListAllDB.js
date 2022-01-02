const BizDatabase = require('../../entities/BizDatabase');

class ListAllDB
{
    constructor( bizDBRepo )
    {
        var _bizDBRepo = bizDBRepo;
    }

    async ListAllDB()
    {
        return await this._bizDBRepo.GetAll();
    }

}

module.exports = ListAllDB;