const {DataTypes, Model} = require('sequelize');


const attributes = 
{
    UserID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    Username: {
        type: DataTypes.STRING,
        allowNull: false
    },

    Password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    Email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    LastLogin: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    }
    
};

class UserModel extends Model {
}


module.exports = ( sequelizeConnection ) =>
{
    UserModel.init(attributes, {
        tableName: "User",
        sequelize: sequelizeConnection,
        timestamps: false,
        createdAt: false,
        updatedAt: false
    });
    return UserModel;
};