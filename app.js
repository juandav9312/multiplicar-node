const { argv } = require('./config/yargs');
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//let argv2 = process.argv;
//console.log(argv2);
let comando = argv._[0];
switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite);
    break;

    case 'crear':
        crearArchivo(argv.base, argv.limite).then(result=>{
            console.log(colors.green(result));
        }).catch(e=>{
            console.log(e);
        })
    break;

    default:
        console.log('No reconocido');
    break;
}


