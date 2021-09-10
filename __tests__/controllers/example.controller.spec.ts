import { FastifyReply } from 'fastify'
import exampleController from '../../src/api/controllers/example.controller'
import { ListExamplesRequest } from '../../src/api/types/example.types'

const examples = [
  { id: 1, text: 'lorem' },
  { id: 2, text: 'ipsum' },
  { id: 3, text: 'dolor' },
  { id: 4, text: 'sit' },
  { id: 5, text: 'amet' },
]

const request = {}
const response = {
  status: jest.fn().mockReturnThis(),
  send: jest.fn()
}

jest.mock('../../src/api/services/example.service', () => ({
  list: () => examples
}))

describe('ExampleController', () => {
  describe('list function', () => {
    describe('when success', () => {
      beforeEach(async () => {
        await exampleController.list(<ListExamplesRequest>request, <FastifyReply><unknown>response)
      })

      it('should send status 200', () => {
        expect(response.status).toHaveBeenCalledWith(200)
      })

      it('should return an array of examples', () => {
        expect(response.send).toHaveBeenCalledWith(examples)
      })
    })
  })
})