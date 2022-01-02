const User = require('../../entities/User');

class UpdateUser
{
    constructor( userRepo, bizDBRepo )
    {
        var _userRepo = userRepo;
    }

    async UpdateUser( userID, bizID = null, userName = null, password = null)
    {
        var UserModel = new User(userID, bizID, userName, password, null);
        return await this._userRepo.Update( UserModel );
    }

}

module.exports = UpdateUser;