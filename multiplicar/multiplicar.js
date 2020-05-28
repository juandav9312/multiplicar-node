const fs = require('fs');
const colors = require('colors');
let listarTabla = (base, limite = 10)=>{
        console.log(`Tabla de ${base}`.green);
        let data = '';
        for(i=0; i<=limite; i++){
            data += `${base} * ${i} = ${base*i}  \n`;
        }
         console.log(data);
}

let crearArchivo = (base, limite = 10)=>{

    return new Promise( (resolve, reject) =>{
        let data = '';
        if(!Number(base)){
            reject('No numero');
            return;
        }

        for(i=0; i<=limite; i++){
            data += `${base} * ${i} = ${base*i}  \n`;
        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {   
            if (err){
                reject(err);
            }else{
                resolve('Archivo creado');
            }
          });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}

//otra manera
//let crearArchivo = module.exports.crearArchivo