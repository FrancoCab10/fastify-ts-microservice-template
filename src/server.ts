import './core/config/aliases'
import { join } from 'path'
import logger from '@core/config/logger'
import AutoLoad from 'fastify-autoload'
import { fastify, FastifyInstance } from 'fastify'

const createServer = (): FastifyInstance => {
  const server = fastify({ logger })

  void server.register(AutoLoad, {
    dir: join(__dirname, 'core'),
    ignorePattern: /(aliases|logger).ts/,
    dirNameRoutePrefix: false
  })

  void server.register(AutoLoad, {
    dir: join(__dirname, 'plugins')
  })

  void server.register(AutoLoad, {
    dir: join(__dirname, 'api/routes')
  })

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
