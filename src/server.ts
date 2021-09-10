import 'module-alias/register'
import { fastify, FastifyInstance } from 'fastify'
import config from '@plugins/config'
import health from '@plugins/health'
import swagger from '@plugins/swagger'
import router from '@api/router'

const createServer = (): FastifyInstance => {
  const server = fastify({ logger: true })

  server.register(config)
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
