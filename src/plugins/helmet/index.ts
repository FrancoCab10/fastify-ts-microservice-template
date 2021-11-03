import fp from 'fastify-plugin'
import helmet from 'fastify-helmet'
import { FastifyInstance, FastifyPluginOptions } from 'fastify'

export default fp(
  (
    fastify: FastifyInstance,
    opts: FastifyPluginOptions,
    next: (err?: Error) => void
  ) => {
    fastify.register(helmet, {
      ...opts
    })
    next()
  }
)
