import fp from 'fastify-plugin'
import fastifyOas from 'fastify-oas'
import { FastifyInstance, FastifyPluginOptions } from 'fastify'

export default fp(
  (
    fastify: FastifyInstance,
    opts: FastifyPluginOptions,
    next: (err?: Error) => void
  ) => {
    const swaggerConfig = {
      exposeRoute: true,
      routePrefix: '/docs',
      swagger: {
        info: {
          title: 'Example Microservice',
          description: 'Example Microservice',
          version: '1.0.0'
        },
        schemes: ['https'],
        consumes: ['application/json'],
        produces: ['application/json'],
        servers: [
          {
            url: 'http://localhost:5000',
            description: 'Local server'
          }
        ],
        securityDefinitions: {
          apiKey: {
            type: 'apiKey',
            name: 'apiKey',
            in: 'header'
          }
        },
        ...opts
      }
    }
    fastify.register(fastifyOas, swaggerConfig)
    next()
  }
)
