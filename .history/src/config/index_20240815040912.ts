import dotenv from 'dotenv'
import path from 'path'

// configure path and join current working directory with .env
dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  env: process.env.NODE_ENV,
  database_url: process.env.DATABASE_URL,
  port: process.env.PORT,
}
