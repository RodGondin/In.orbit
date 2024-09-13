import z from 'zod'
import { config } from 'dotenv'

// Carregar as variáveis de ambiente do arquivo .env
config()

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
