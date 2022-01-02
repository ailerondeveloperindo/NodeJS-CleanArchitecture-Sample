class BizDatabase
{
    constructor( dbID, UUID, dbName )
    {
        var _dbID = dbID;
        var _UUID = UUID;
        var _dbName = dbName;
    }

    get dbID()
    {
        return this._dbID;
    }

    get fullDBName()
    {
        return this._dbName + this._UUID;
    }
}

module.exports = BizDatabase