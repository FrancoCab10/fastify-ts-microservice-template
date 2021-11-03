import { FastifyLoggerOptions } from 'fastify'

const env = process.env.NODE_ENV || 'development'
const logger: FastifyLoggerOptions = { level: 'info', prettyPrint: false }

if (env === 'development') {
  logger.prettyPrint = {
    colorize: true,
    translateTime: true,
    ignore: 'pid,hostname'
  }
}

export default logger