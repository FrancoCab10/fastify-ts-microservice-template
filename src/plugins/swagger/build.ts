/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs'
import Fastify from '../../server'

const fastify = Fastify()

const dir = './docs'
const start = async () => {
  try {
    await fastify.ready()
    !fs.existsSync(dir) && fs.mkdirSync(dir)
    fs.writeFileSync(`${dir}/swagger.yml`, (<any>fastify).swagger({ yaml: true }))
    fastify.log.info(`Documentation saved to ${dir}/swagger.yml`)
    process.exit()
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
