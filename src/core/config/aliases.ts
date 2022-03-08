import { addAliases } from 'module-alias'

addAliases({
  '@api': `${__dirname}/../../api`,
  '@plugins': `${__dirname}/../../plugins`,
  '@core': `${__dirname}/..`
})