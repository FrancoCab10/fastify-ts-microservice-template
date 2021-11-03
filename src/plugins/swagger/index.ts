import fp from 'fastify-plugin'
import fastifySwagger, { SwaggerOptions } from 'fastify-swagger'
import { FastifyInstance, FastifyPluginOptions } from 'fastify'

export default fp(
  (
    fastify: FastifyInstance,
    opts: SwaggerOptions,
    next: (err?: Error) => void
  ) => {
    const swaggerConfig: FastifyPluginOptions = {
      exposeRoute: true,
      staticCSP: true,
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
        securityDefinitions: {
          apiKey: {
            type: 'apiKey',
            name: 'apiKey',
            in: 'header'
          }
        },
        uiConfig: {
          docExpansion: 'full',
          deepLinking: false
        },
        ...opts
      }
    }
    fastify.register(fastifySwagger, swaggerConfig)
    next()
  }
)
