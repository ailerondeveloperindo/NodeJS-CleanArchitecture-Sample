const User = require('../../entities/User');

class ListAllUser
{
    constructor( userRepo, bizDBRepo )
    {
        var _userRepo = userRepo;
    }

    async ListAllUser()
    {
        return await this._userRepo.GetAll();
    }

}

module.exports = new ListAllUser();