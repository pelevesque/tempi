'use strict'

const chalk  = require('chalk')

function _makeScale(wholeNote) {
  let scale = []
  scale[0]  = wholeNote           // whole note
  scale[1]  = scale[0] * (6 / 5)  // (6:5) whole note sextuplet vs 5 whole notes
  scale[2]  = scale[0] * (5 / 4)  // (5:4) whole note quintuplet vs 4 whole notes
  scale[3]  = scale[0] * (4 / 3)  // (4:3) dotted half note
  scale[4]  = scale[0] * (3 / 2)  // (3:2) whole note triplet vs 2 whole notes
  scale[5]  = scale[0] * (2 / 1)  // (2:1) half note
  scale[6]  = scale[1] * 2        // (6:5) half note sextuplet vs 5 half notes
  scale[7]  = scale[2] * 2        // (5:4) half note quintuplet vs 4 half notes
  scale[8]  = scale[3] * 2        // (4:3) dotted quarter note
  scale[9]  = scale[4] * 2        // (3:2) half note triplet vs 2 half notes
  scale[10] = scale[5] * 2        // (2:1) quarter note
  scale[11] = scale[1] * 4        // (6:5) quarter note sextuplet vs 5 quarter notes
  scale[12] = scale[2] * 4        // (5:4) quarter note quintuplet vs 4 quarter notes
  scale[13] = scale[3] * 4        // (4:3) dotted eight note
  scale[14] = scale[4] * 4        // (3:2) quarter note triplet vs 3 quarter notes
  scale[15] = scale[5] * 4        // (2:1) eight note
  scale[16] = scale[1] * 8        // (6:5) eight note sextuplet vs 5 eight notes
  scale[17] = scale[2] * 8        // (5:4) eight note quintuplet vs 4 eight notes
  scale[18] = scale[3] * 8        // (4:3) dotted sixteenth note
  scale[19] = scale[4] * 8        // (3:2) eight note triplet vs 2 eight notes
  return scale
}

function _trimDecimals(scale, i) {
  if (scale[i] % 1 !== 0) scale[i] = scale[i].toFixed(2)
}

function _stringify(scale, i) {
  scale[i] = scale[i].toString()
}

function _pad(scale, i) {
  scale[i] = scale[i].padEnd(6)
}

function _colorize(scale, i) {
  if (i % 5 == 0) scale[i] = chalk.rgb(255, 255, 255).underline(scale[i])
  if (i % 5 == 1) scale[i] = chalk.rgb(255, 230, 178)(scale[i])
  if (i % 5 == 2) scale[i] = chalk.rgb(255, 205, 102)(scale[i])
  if (i % 5 == 3) scale[i] = chalk.rgb(255, 180,  25)(scale[i])
  if (i % 5 == 4) scale[i] = chalk.rgb(255, 155,  0)(scale[i])
}

function _formatScale(scale, trimDecimals = true, pad = true, colorize = true) {
  for (let i = 0; i < scale.length; i++) {
    if (trimDecimals) _trimDecimals(scale, i)
    _stringify(scale, i)
    if (pad) _pad(scale, i)
    if (colorize) _colorize(scale, i)
  }
}

function _renderScale(wholeNotesPerMinute, trimDecimals = true, pad = true, colorize = true) {
  let scale = _makeScale(wholeNotesPerMinute)
  _formatScale(scale, trimDecimals, pad, colorize)
  console.log('    ' + scale.join(' '))
}

module.exports = (args) => {
  const format =       args.f || args.format ? true : false
  const trimDecimals = args.t || args.trimDecimals || format ? true : false
  const pad =          args.p || args.pad          || format ? true : false
  const colorize =     args.c || args.colorize     || format ? true : false

  const useWholeNotesPerMinute = args.w || args.whole ? true : false

  const infos = args.i || args.infos ? true : false

  const arg1 = args['_'][1]
  let arg2 = args['_'][2]

  if (infos) {
    console.log('')
    console.log('    ' + chalk.rgb(255, 255, 255).underline('|||||') + ' = 2:1')
    console.log('    ' + chalk.rgb(255, 230, 178)('|||||') + ' = 6:5')
    console.log('    ' + chalk.rgb(255, 205, 102)('|||||') + ' = 5:4')
    console.log('    ' + chalk.rgb(255, 180,  25)('|||||') + ' = 4:3')
    console.log('    ' + chalk.rgb(255, 155,  0)('|||||') + ' = 3:2')
  }

  console.log('')
  if (typeof arg1 === 'number') {
    if (typeof arg2 !== 'number') arg2 = arg1
    for (let i = arg1; i <= arg2; i++) {
      const wholeNotesPerMinute = useWholeNotesPerMinute ? i : i / 4
      _renderScale(wholeNotesPerMinute, trimDecimals, pad, colorize)
    }
  } else {
    for (let i = 15; i <= 30; i++) {
      _renderScale(i)
    }
  }
  console.log('')
}
