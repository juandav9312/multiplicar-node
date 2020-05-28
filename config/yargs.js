const options = {
    base:{
        demand: true,
        alias: 'b'
    },
    limite:{
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs').command('listar', 'Imprime en consola', options).command('crear', 'Crea archivo', options)
.help()
.argv;

module.exports = {
    argv
}