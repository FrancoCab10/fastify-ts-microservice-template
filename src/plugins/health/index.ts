import { FastifyInstance } from 'fastify'

export default async (fastify: FastifyInstance): Promise<void> => {
  const healthSchema = {
    title: 'Health',
    summary: '/health',
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
    url: '/health',
    schema: healthSchema,
    handler: async (_request, reply) => reply.code(200).send({ message: 'ok' })
  })
}
