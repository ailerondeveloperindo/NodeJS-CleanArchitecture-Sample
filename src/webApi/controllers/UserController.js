const DBUseCases = require('../../application/BizDB');
const UserUseCases = require('../../application/User');

class UserController
{
    async CreateUser( request )
    {
        
    }

    async GetAUser( request )
    {
        var users = await UserUseCases.ListAllUser();

    }
}

module.exports = UserController;