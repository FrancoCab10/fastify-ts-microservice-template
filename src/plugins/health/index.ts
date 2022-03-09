import fastifyHealthcheck from 'fastify-healthcheck'
import fp from 'fastify-plugin'
import { FastifyInstance, FastifyPluginOptions } from 'fastify'

export default fp(
  (
    fastify: FastifyInstance,
    opts: FastifyPluginOptions,
    next: (err?: Error) => void
  ) => {
    fastify.addHook('onClose', (instance, done) => {
      fastify.serviceAvailable = false
      fastify.log.info('onClose event raised, shutting down...')
      done()
    })

    fastify.register(fastifyHealthcheck, {
      healthcheckUrl: '/live',
      logLevel: 'warn'
      // healthcheckUrlDisable: true,
      // healthcheckUrlAlwaysFail: true,
      // underPressureOptions: { } // no under-pressure specific options set here
    })

    fastify.get('/ready', { logLevel: 'warn' }, async (request, reply) => {
      reply.code(fastify.serviceAvailable ? 200 : 503).send()
    })

    next()
  }
)