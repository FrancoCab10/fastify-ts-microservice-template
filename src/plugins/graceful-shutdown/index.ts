import fp from 'fastify-plugin'
import { FastifyInstance, FastifyPluginOptions } from 'fastify'

declare module 'fastify' {
  interface FastifyInstance {
    serviceAvailable: boolean;
  }
}

export default fp(
  (
    fastify: FastifyInstance,
    opts: FastifyPluginOptions,
    next: (err?: Error) => void
  ) => {
    fastify.decorate('serviceAvailable', true)
    const signals = ['SIGINT', 'SIGTERM']
    const onfulfilled = () => {
      fastify.log.info('Done.')
      process.exit(0)
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onrejected = (err: any) => {
      fastify.log.error(err)
      process.exit(1)
    }
    signals.forEach(signal => {
      process.on(signal, () => {
        fastify.log.info(`${signal} signal received. Terminating service`)
        // eslint-disable-next-line no-param-reassign
        fastify.serviceAvailable = false
        fastify.close().then(onfulfilled, onrejected)
      })
    })

    next()
  }
)
