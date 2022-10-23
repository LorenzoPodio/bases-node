const argv = require('yargs').option('b', {
  alias: 'base',
  type: 'number',
  demandOption: true,
  describe: 'Número correspondiente a la base de la tabla'
}).option('l', {
  alias: 'listar',
  type: 'boolean',
  default: false,
  describe: 'Muestra la tabla en consola'
}).option('h', {
  alias: 'hasta',
  type: 'number',
  default: 10,
  describe: 'Número que indica hasta donde se va a multiplicar la base'
}).check((argv, options) => {
  if (isNaN(argv.b)) {
    throw 'La base debe ser un número'
  } return true;
})
.argv;

module.exports = argv;