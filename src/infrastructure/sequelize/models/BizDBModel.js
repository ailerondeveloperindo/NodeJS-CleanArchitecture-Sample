const {DataTypes, Model} = require('sequelize');

const attributes = 
{
    DBID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NanoID: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    DatabaseName: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    
};

class BizDBModel extends Model {
}




module.exports = ( sequelizeConnection ) => {

    BizDBModel.init(attributes, {
        tableName: 'BizDB',
        sequelize: sequelizeConnection,
        timestamps: false,
        createdAt: false,
        updatedAt: false
    });
    return BizDBModel;
}