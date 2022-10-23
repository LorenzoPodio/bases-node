const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    if (listar) {
      console.log('=========================='.bgBlack);
      console.log(`Tabla del: ${base}`.bgBlack);
      console.log('=========================='.bgBlack);
    }

    let salida, consola = '';

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} x ${i} = ${base * i}\n`.bgBlack;
    }
    if (listar) { console.log(consola); }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo
}