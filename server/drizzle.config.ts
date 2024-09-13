import { defineConfig } from 'drizzle-kit'
import { config } from 'dotenv'
import { env } from './src/env'

config() // Carrega as variáveis do arquivo .env

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL, // Usando o valor validado de DATABASE_URL
  },
})
