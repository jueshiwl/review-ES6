import yargs from 'yargs';

const args = yargs

    .option('production', {
        boolean: true,
        default: false,
        describle: 'min all scripts'
    })

    .option('watch', {
        boolean: true,
        default: false,
        describle: 'watch all files'
    })

    .option('verbose', {
        boolean: true,
        default: false,
        describle: 'log'
    })

    .option('sourcemaps', {
        describle: 'force the creation of sroucemaps'
    })

    .option('port', {
        string: true,
        default: 8080,
        describle: 'sercer port'
    })

    .argv

export default args;
    