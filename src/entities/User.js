class User
{
    constructor( userID, bizID, userName, password, lastLogin )
    {
        var _userID = userID;
        var _bizID = bizID;
        var _userName = userName;
        var _password = password;
        var _lastLogin = lastLogin;
    }

    get userID()
    {
        return this._userID;
    }

    get bizID()
    {
        return this._bizID;
    }

    get userName()
    {
        return this._userName;
    }

    get password()
    {
        return this._password;
    }

    get lastLogin()
    {
        return this._lastLogin;
    }
}

module.exports = User;