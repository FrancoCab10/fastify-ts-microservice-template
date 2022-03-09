import 'module-alias/register'
import { join } from 'path'
import AutoLoad from 'fastify-autoload'
import { fastify, FastifyInstance, FastifyLoggerOptions } from 'fastify'

const createServer = (): FastifyInstance => {
  const env = process.env.NODE_ENV || 'development'
  const logger: FastifyLoggerOptions = { level: 'info', prettyPrint: false }

  if (env === 'development') {
    logger.prettyPrint = {
      colorize: true,
      translateTime: 'SYS:yyyy-mm-dd HH:MM:ss',
      ignore: 'pid,hostname',
    }
  }
  const server = fastify({ logger })

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
