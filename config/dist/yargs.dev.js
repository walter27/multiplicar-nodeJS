"use strict";

var opciones = {
  base: {
    demand: true,
    alias: 'b'
  },
  limite: {
    alias: 'l',
    "default": 10
  }
};

var argv = require('yargs').command('crear', 'crea la tabla de multiplcar', opciones).command('listar', 'imprime en consola la tabla de multiplcar', opciones).help().argv;

module.exports = {
  argv: argv
};