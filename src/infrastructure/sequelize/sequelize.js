const config = require('../config');
const {Sequelize} = require('sequelize');

class SequelizeAdapter
{
    #_config;
    constructor( config )
    {
        this.#_config = config;
    }

    InitRelationship()
    {
        console.log(this.#_config);
        const sequelizeConnection = new Sequelize(this.#_config);
        const User = require('./models/UserModel')( sequelizeConnection );
        const BizDB = require('./models/BizDBModel')( sequelizeConnection );
        User.hasOne( BizDB );
        BizDB.belongsTo(User, { foreignKey: {
            name: 'UserID',
            allowNull: false
        } });
        return { User, BizDB, sequelize: sequelizeConnection };
    }
}

module.exports = SequelizeAdapter;