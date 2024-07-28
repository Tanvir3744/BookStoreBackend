import dotenv from 'dotenv';
import path from 'path';
dotenv.config({path: path.join(prcess.cwd(), ".env")})

export default {
    database_url: process.env.DATABASE_URL
}