import { errorResponse, validationErrorResponse } from './errors.schema'
import { exampleSchema, exampleDraftSchema } from '@api/types/example.types'

const headers = {
  type: 'object',
  properties: {
    Authorization: { type: 'string' }
  },
  required: ['Authorization']
}

const defaultResponse = {
  200: exampleSchema,
  400: validationErrorResponse,
  '4xx': errorResponse,
  '5xx': errorResponse
}

const listExamples = {
  title: 'List examples',
  summary: '/v1/example',
  description: 'List of examples',
  headers,
  response: {
    ...defaultResponse,
    200: {
      type: 'array',
      items: exampleSchema
    }
  }
}

const createExample = {
  title: 'Create example',
  summary: '/v1/example',
  description: 'Create a new example',
  headers,
  body: exampleDraftSchema,
  response: defaultResponse
}

const getExample = {
  title: 'Get example',
  summary: '/v1/example/:id',
  description: 'Get an example by id',
  headers,
  response: defaultResponse
}

const updateExample = {
  title: 'Update example',
  summary: '/v1/example/:id',
  description: 'Update an example by id',
  headers,
  body: exampleDraftSchema,
  response: defaultResponse
}

const partialUpdateExample = {
  title: 'Partial update example',
  summary: '/v1/example/:id',
  description: 'Update an example by id',
  headers,
  body: exampleDraftSchema,
  response: defaultResponse
}

const deleteExample = {
  title: 'Delete example',
  summary: '/v1/example/:id',
  description: 'Delete an example by id',
  headers,
  response: defaultResponse
}

export default {
  list: listExamples,
  create: createExample,
  get: getExample,
  update: updateExample,
  partialUpdate: partialUpdateExample,
  delete: deleteExample
}
