"use strict";

var _require = require('./multiplicar/multiplicar'),
    crearArchivo = _require.crearArchivo,
    listarTabla = _require.listarTabla;

var argv = require('./config/yargs').argv;

var colors = require('colors/safe'); //let base = 7;
//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1]


var comando = argv._[0];

switch (comando) {
  case 'listar':
    listarTabla(argv.base, argv.limite);
    break;

  case 'crear':
    crearArchivo(argv.base, argv.limite).then(function (archivo) {
      console.log("Archivo creado: ".concat(archivo));
    })["catch"](function (err) {
      console.log(err);
    });
    break;

  default:
    console.log('comando no encontrado');
    break;
}