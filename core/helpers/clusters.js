const cluster = require('cluster');
const core = 4;

const clusterInit = ( app, port ) => {

    if (cluster.isMaster) {

        for (var i = 0; i < core; i++) {
            cluster.fork();
        }

        cluster.on('online', function(worker) {

            console.log('Worker ' + worker.process.pid + ' is online');

        });
    
        cluster.on('exit', function(worker, code, signal) {
            console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
            console.log('Starting a new worker');
            cluster.fork();
        });

    } else {

        app.listen( port, () => {
            console.log( `App listen on port ${port}` );
        });

    }

}

module.exports = {
    clusterInit
}