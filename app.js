const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
.then( result => console.log(result.green.bgBlack, 'creado'.green.bgBlack))
.catch( err => console.log(err));
