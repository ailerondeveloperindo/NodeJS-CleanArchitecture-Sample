const User = require('../../entities/User');

class CreateUser
{
    constructor( userRepo, bizDBRepo )
    {
        var _userRepo = userRepo;
    }

    async CreateUser( bizID, userName, password )
    {
        var UserModel = new User(null, bizID, userName, password, null);
        return await this._userRepo.Persist( UserModel );
    }

}

module.exports = CreateUser;