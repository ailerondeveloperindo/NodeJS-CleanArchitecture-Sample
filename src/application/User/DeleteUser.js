const User = require('../../entities/User');

class DeleteUser
{
    constructor( userRepo )
    {
        var _userRepo = userRepo;
    }

    async DeleteUser( userID )
    {
        var UserModel = new User(userID, null, null, null, null);
        const exist = await this._userRepo.exist( UserModel )
        if( exist )
        {
            return await this._userRepo.Remove( UserModel );
        }
    }

}

module.exports = DeleteUser;