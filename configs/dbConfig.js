import dotenv from 'dotenv';
dotenv.config();

const dbConfig = {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'transport-company-db',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: process.env.DB_DIALECT || 'mysql',
    seederStorage: 'sequelize',
};
export default dbConfig;