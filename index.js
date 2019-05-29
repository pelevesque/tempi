'use strict'

const minimist = require('minimist')

module.exports = () => {

  const args = minimist(process.argv.slice(2))

  let cmd = args._[0] || 'help'

  if (args.scale) {
    cmd = 'scale'
  }

  if (args.terms) {
    cmd = 'terms'
  }

  if (args.version || args.v) {
    cmd = 'version'
  }

  if (args.help || args.h) {
    cmd = 'help'
  }

  switch (cmd) {
    case 'scale':
      require('./cmds/scale')(args)
      break

    case 'terms':
      require('./cmds/terms')(args)
      break

    case 'version':
      require('./cmds/version')(args)
      break

    case 'help':
      require('./cmds/help')(args)
      break

    default:
      console.error(`Error: ${cmd} is not a valid command.`)
      break
  }
}
