const User = require('../../entities/User');

class ListAUser
{
    constructor( userRepo, bizDBRepo )
    {
        var _userRepo = userRepo;
    }

    async ListAUser( userID )
    {
        var UserModel = new User(userID, null, null, null, null);
        return await this._userRepo.GetByID( UserModel );
    }

}

module.exports = ListAUser;