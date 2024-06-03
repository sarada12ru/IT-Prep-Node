import cluster from "cluster";
const core = 4;

export const clusterInit = ( app: any, port: number ) => {

    if (cluster.isPrimary) {

        for (var i = 0; i < core; i++) {
            cluster.fork();
        }

        cluster.on('online', function(worker: any) {

            console.log('Worker ' + worker.process.pid + ' is online');

        });
    
        cluster.on('exit', function(worker: any, code: number, signal: string) {
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