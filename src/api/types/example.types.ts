import { FastifyRequest } from 'fastify'
import { Type, Static } from '@sinclair/typebox'

export const exampleSchema = Type.Object({
  id: Type.Number({ example: 1 }),
  text: Type.String({ example: 'Lorem Ipsum!' })
})

export const exampleDraftSchema = Type.Omit(
  exampleSchema,
  ['id']
)

export type Example = Static<typeof exampleSchema>

export type ExampleDraft = Static<typeof exampleDraftSchema>

export type ListExamplesRequest = FastifyRequest

export type CreateExampleRequest = FastifyRequest<{ Body: ExampleDraft }>

export type GetExampleRequest = FastifyRequest<{ Params: { id: number } }>

export type UpdateExampleRequest = FastifyRequest<{
  Params: { id: number },
  Body: ExampleDraft
}>

export type DeleteExampleRequest = GetExampleRequest