'use strict'

const menus = {
  main: `
    tempi [command] <options>

    scale .............. show the scale for a given tempo
    terms .............. show common tempo terms
    version ............ show package version
    help ............... show help menu for a command
    `,

  scale: `
    Shows a tempo scale based on a given BPM (beats per minute)

    tempi scale <BPM> <BPM>

    1) If no arguments are provided, a formatted list of all scales
       between 15 and 30 using a whole note value will be outputted.

       ex: tempi scale

    2) When one BPM is provided, one scale is outputted for that value.

       ex: tempi scale 60

    3) When two BPM values are provided, a list of all the scales
       from the first BPM value to the second BPM value will be outputted.

       ex: tempi scale 60 80

    Flags

    -t or --trimDecimals    trim decimals to a max of 2
    -p or --pad             pad the output
    -c or --colorize        colorize the output
    -f or --format          trims decimals, and pads and colorizes the output
    -w or --whole           BPM signifies whole note instead of quarter note
    -i or --infos           provide a list of helping infos before outputting scales

    Examples:

    tempi scale 60
    tempi scale 60 -w
    tempi scale 60 80 -f
    tempi scale -i
    `,
}

module.exports = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  console.log(menus[subCmd] || menus.main)
}
