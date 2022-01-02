class UserDetailVM
{
    constructor( userID, username, password, email )
    {
        var _userID = userID;
        var _username = username;
        var _password = password;
        var _email = email;
    }

    get userID()
    {
        return this._userID;
    }

    get userName()
    {
        return this._username;
    }

    get password()
    {
        return this._password;
    }

    get email()
    {
        return this._email;
    }
}