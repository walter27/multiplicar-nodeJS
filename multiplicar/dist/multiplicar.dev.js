"use strict";

//PROPIA DEL NODE
var fs = require('fs');

var colors = require('colors'); //CREADOS POR OTROS INSTLAR
//const express = require('express');
//PROPIOS
//const nuestro = require('./direcorry');


var data = '';

var listarTabla = function listarTabla(base, limite) {
  for (var index = 0; index <= limite; index++) {
    console.log("".concat(base, " * ").concat(index, " = ").concat(base * index, "\n"));
  }
};

var crearArchivo = function crearArchivo(base, limite) {
  return new Promise(function (resolve, reject) {
    if (!Number(base)) {
      reject("La base ".concat(base, " no es un numero"));
      return;
    } else {}

    for (var index = 0; index <= limite; index++) {
      data += "".concat(base, " * ").concat(index, " = ").concat(base * index, "\n");
    }

    fs.writeFile("./tablas/Tabla-".concat(base, ".txt"), data, function (err) {
      if (err) reject(err);else resolve("Tabla-".concat(base, ".txt"));
    });
  });
};

module.exports = {
  crearArchivo: crearArchivo,
  listarTabla: listarTabla
};