/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs'
import CreateServer from '../../server'

const dir = './docs'
const start = async () => {
  const fastify = CreateServer()

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
