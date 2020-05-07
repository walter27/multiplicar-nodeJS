//PROPIA DEL NODE
const fs = require('fs');
const colors = require('colors');


//CREADOS POR OTROS INSTLAR
//const express = require('express');

//PROPIOS
//const nuestro = require('./direcorry');

let data = '';

let listarTabla = (base, limite) => {

    for (let index = 0; index <= limite; index++) {

        console.log(`${base} * ${index} = ${base * index}\n`)

    }
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {

            reject(`La base ${base} no es un numero`);
            return;

        } else {

        }

        for (let index = 0; index <= limite; index++) {

            data += `${base} * ${index} = ${base * index}\n`;

        }

        fs.writeFile(`./tablas/Tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`Tabla-${base}.txt`)
        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}

