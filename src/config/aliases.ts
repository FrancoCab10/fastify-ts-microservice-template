import { addAliases } from 'module-alias'

addAliases({
  '@api': `${__dirname}/../api`,
  '@errors': `${__dirname}/../errors`,
  '@plugins': `${__dirname}/../plugins`,
  '@utils': `${__dirname}/../utils`
})