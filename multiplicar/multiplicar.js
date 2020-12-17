const fs = require('fs');
const colors = require('colors')

const listarTabla = (base,limite = 10) => {
    if(!Number(base)){
        console.log(`El valor introducido ${base} no es un número`)
        return
    }
    console.log('================'.green)
    console.log(`  Tabla del ${base}`.green)
    console.log('================'.green)
    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`)
    }
}

const crearArchivo = (base, limite = 10) => {
    return new Promise((resolve,reject) => {

        if(!Number(base)){
            reject(`El valor introducido ${base} no es un número`)
            return
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {
            data +=`${base} * ${i} = ${base * i}\n`
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
          if (err) 
            reject(err)
          else
            resolve(`tabla-${base}.txt`)
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}