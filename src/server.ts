import './config/aliases'
import logger from './config/logger'
import { fastify, FastifyInstance } from 'fastify'
import config from '@plugins/config'
import helmet from '@plugins/helmet'
import swagger from '@plugins/swagger'
import health from '@plugins/health'
import router from '@api/router'

const createServer = (): FastifyInstance => {
  const server = fastify({ logger })

  server.register(config)
  server.register(helmet)
  server.register(swagger)
  server.register(health, { prefix: '/v1' })
  server.register(router, { prefix: '/v1/example' })

  return server
}

const start = async () => {
  const server = createServer()
  try {
    await server.ready()
    await server.listen(server.config.PORT, server.config.HOST)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()

export default createServer
