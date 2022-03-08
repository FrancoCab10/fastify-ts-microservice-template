import { FastifyInstance } from 'fastify'
import exampleSchema from '@api/schemas/example.schema'
import exampleController from '@api/controllers/example.controller'

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.route({
    method: 'GET',
    url: '/',
    schema: exampleSchema.list,
    handler: exampleController.list
  })

  fastify.route({
    method: 'POST',
    url: '/',
    schema: exampleSchema.create,
    handler: exampleController.create
  })

  fastify.route({
    method: 'GET',
    url: '/:id',
    schema: exampleSchema.get,
    handler: exampleController.get
  })

  fastify.route({
    method: 'PUT',
    url: '/:id',
    schema: exampleSchema.update,
    handler: exampleController.update
  })

  fastify.route({
    method: 'PATCH',
    url: '/:id',
    schema: exampleSchema.partialUpdate,
    handler: exampleController.partialUpdate
  })

  fastify.route({
    method: 'DELETE',
    url: '/:id',
    schema: exampleSchema.delete,
    handler: exampleController.delete
  })
}
