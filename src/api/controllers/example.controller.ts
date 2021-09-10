import { FastifyReply } from 'fastify'
import {
  ListExamplesRequest,
  CreateExampleRequest,
  GetExampleRequest,
  UpdateExampleRequest,
  DeleteExampleRequest
} from '@api/types/example.types'
import exampleService from '@api/services/example.service'

class ExampleController {

  async list(_request: ListExamplesRequest, reply: FastifyReply) {
    return reply.status(200).send(await exampleService.list())
  }

  async create(request: CreateExampleRequest, reply: FastifyReply) {
    const { body } = request
    return reply.status(200).send(await exampleService.create(body))
  }

  async get(request: GetExampleRequest, reply: FastifyReply) {
    const { params: { id } } = request
    return reply.status(200).send(await exampleService.get(+id))
  }

  async update(request: UpdateExampleRequest, reply: FastifyReply) {
    const { body, params: { id } } = request
    return reply.status(200).send(await exampleService.update(+id, body))
  }

  async partialUpdate(request: UpdateExampleRequest, reply: FastifyReply) {
    const { body, params: { id } } = request
    return reply.status(200).send(await exampleService.partialUpdate(+id, body))
  }

  async delete(request: DeleteExampleRequest, reply: FastifyReply) {
    const { params: { id } } = request
    return reply.status(200).send(await exampleService.delete(+id))
  }

}

const controller = new ExampleController()

export default controller
