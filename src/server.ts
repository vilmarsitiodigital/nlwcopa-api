import cors from '@fastify/cors'
import jwt from "@fastify/jwt"
import Fastify from "fastify"

import { authRoutes } from "./routes/auth"
import { gameRoutes } from "./routes/game"
import { guessRoutes } from "./routes/guess"
import { poolRoutes } from "./routes/pool"
import { userRoutes } from "./routes/user"

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  })

  await fastify.register(cors, {
    origin: true //Substitua pelo domínio que irá aceitar as requisições EX: meudominio.com.br
  })

  await fastify.register(jwt, {
    secret: 'nlwcopa', //Substitua por uma variável de ambiente
  })

  await fastify.register(authRoutes)
  await fastify.register(poolRoutes)
  await fastify.register(gameRoutes)
  await fastify.register(guessRoutes)
  await fastify.register(userRoutes)

  const port = Number(process.env.PORT || 3333);
  await fastify.listen({ port, host: '0.0.0.0' })
}

bootstrap()