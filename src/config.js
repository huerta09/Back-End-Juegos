import {config} from 'dotenv';

config();

//puerto de app
export const PORT = process.env.PORT;
//BD MONGO
export const DB_HOST = process.env.DB_HOST;
export const DB_DATABASE = process.env.DB_DATABASE;
export const DB_PORT = process.env.DB_PORT;