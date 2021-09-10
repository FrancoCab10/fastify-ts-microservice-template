import { FastifyRequest } from 'fastify'

export type Example = {
  id: number
  text: string
}

export type ExampleDraft = Omit<Example, 'id'>

export type ListExamplesRequest = FastifyRequest

export type CreateExampleRequest = FastifyRequest<{
  Body: ExampleDraft
}>

export type GetExampleRequest = FastifyRequest<{
  Params: {
    id: number
  }
}>

export type UpdateExampleRequest = FastifyRequest<{
  Params: {
    id: number
  },
  Body: ExampleDraft
}>

export type DeleteExampleRequest = GetExampleRequest