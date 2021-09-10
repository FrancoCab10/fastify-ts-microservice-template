export const errorResponse = {
  type: 'object',
  properties: {
    status: {
      type: 'number',
      description: 'the HTTP status code applicable to this problem'
    },
    title: {
      type: 'string',
      description: 'a short, human-readable summary of the problem'
    },
    detail: {
      type: 'string',
      description: 'a human-readable explanation'
    }
  },
  required: ['status']
}

export const validationErrorResponse = {
  ...errorResponse,
  description: 'Error thrown by Connexion when validating request body',
  properties: {
    ...errorResponse.properties,
    type: {
      type: 'string'
    }
  }
}