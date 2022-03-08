import fp from 'fastify-plugin'
import fastifyEnv from 'fastify-env'
import { FastifyInstance, FastifyPluginOptions } from 'fastify'

declare module 'fastify' {
  interface FastifyInstance {
    config: {
      NODE_ENV: string
      HOST: string
      PORT: string
    }
  }
}

export default fp(
  (
    fastify: FastifyInstance,
    opts: FastifyPluginOptions,
    next: (err?: Error) => void
  ) => {
    const schema = {
      type: 'object',
      properties: {
        NODE_ENV: {
          type: 'string',
          default: 'development'
        },
        HOST: {
          type: 'string',
          default: '0.0.0.0'
        },
        PORT: {
          type: 'integer',
          default: 5000
        }
      }
    }

    fastify.register(fastifyEnv, {
      confKey: 'config',
      schema,
      dotenv: process.env.NODE_ENV !== 'production',
      data: opts,
    })

    next()
  }
)
