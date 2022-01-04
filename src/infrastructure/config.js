module.exports = {
    sequelize: {
        production: {
            hostname: 'localhost',
            username: 'root',
            password: '',
            dialect: 'mysql',
            database: 'bikoUserDB'
        },
        mock: {
            host: 'localhost',
            dialect: 'mysql',
            username: 'root',
            password: '',
            database: 'bikoMockDB',            
        }
    },
    encryption: 'bcrypt'
}