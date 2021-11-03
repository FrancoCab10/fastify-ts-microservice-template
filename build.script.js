/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const packageJson = require('./package.json')

let packages = {
  ...packageJson,
  main: 'server.js',
  scripts: {
    start: 'NODE_ENV=production node server.js',
    swagger: 'NODE_ENV=production node plugins/swagger/build.js'
  },
  devDependencies: {}
}

fs.writeFileSync('dist/package.json', JSON.stringify(packages, null, 2))
