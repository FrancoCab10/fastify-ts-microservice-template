import { errorResponse, validationErrorResponse } from './errors.schema'

const exampleDraft = {
  text: { type: 'string', example: 'Lorem ipsum' }
}

const example = {
  id: { type: 'string', example: 1 },
  ...exampleDraft
}

const listExamples = {
  title: 'List examples',
  summary: '/v1/example',
  description: 'List of examples',
  headers: {
    type: 'object',
    properties: {
      Authorization: { type: 'string' }
    },
    required: ['Authorization']
  },
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        properties: example,
      }
    },
    400: validationErrorResponse,
    '4xx': errorResponse,
    '5xx': errorResponse
  }
}

const createExample = {
  title: 'Create example',
  summary: '/v1/example',
  description: 'Create a new example',
  headers: {
    type: 'object',
    properties: {
      Authorization: { type: 'string' }
    },
    required: ['Authorization']
  },
  body: exampleDraft,
  response: {
    200: example,
    400: validationErrorResponse,
    '4xx': errorResponse,
    '5xx': errorResponse
  }
}

const getExample = {
  title: 'Get example',
  summary: '/v1/example/:id',
  description: 'Get an example by id',
  headers: {
    type: 'object',
    properties: {
      Authorization: { type: 'string' }
    },
    required: ['Authorization']
  },
  response: {
    200: example,
    400: validationErrorResponse,
    '4xx': errorResponse,
    '5xx': errorResponse
  }
}

const updateExample = {
  title: 'Update example',
  summary: '/v1/example/:id',
  description: 'Update an example by id',
  headers: {
    type: 'object',
    properties: {
      Authorization: { type: 'string' }
    },
    required: ['Authorization']
  },
  body: exampleDraft,
  response: {
    200: example,
    400: validationErrorResponse,
    '4xx': errorResponse,
    '5xx': errorResponse
  }
}

const partialUpdateExample = {
  title: 'Partial update example',
  summary: '/v1/example/:id',
  description: 'Update an example by id',
  headers: {
    type: 'object',
    properties: {
      Authorization: { type: 'string' }
    },
    required: ['Authorization']
  },
  body: exampleDraft,
  response: {
    200: example,
    400: validationErrorResponse,
    '4xx': errorResponse,
    '5xx': errorResponse
  }
}

const deleteExample = {
  title: 'Delete example',
  summary: '/v1/example/:id',
  description: 'Delete an example by id',
  headers: {
    type: 'object',
    properties: {
      Authorization: { type: 'string' }
    },
    required: ['Authorization']
  },
  response: {
    200: example,
    400: validationErrorResponse,
    '4xx': errorResponse,
    '5xx': errorResponse
  }
}

export default {
  list: listExamples,
  create: createExample,
  get: getExample,
  update: updateExample,
  partialUpdate: partialUpdateExample,
  delete: deleteExample
}
