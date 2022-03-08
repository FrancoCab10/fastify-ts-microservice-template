import { FastifyInstance } from 'fastify'

export default async (fastify: FastifyInstance): Promise<void> => {
  const healthSchema = {
    title: 'Health',
    summary: '/v1/health',
    description: 'Healthcheck route',
    response: {
      200: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'ok'
          }
        }
      }
    }
  }

  fastify.route({
    method: 'GET',
    url: '/v1/health',
    schema: healthSchema,
    handler: async (request, reply) => {
      reply.code(200).send({ message: 'ok' })
    }
  })
}
