// const app = require( 'express' )();
// const cors = require( 'cors' );
// const express = require('express');
// const port = process.env.PORT || 3000;
// const { errorHandler, invalidRoute } = require('./core/helpers/errorHandler');
// require('./core/db/connection');
// const { clusterInit } = require('./core/helpers/clusters');

// app.use( express.urlencoded({extended: false}) )
// app.use( cors() );

// const router = require('./router');
// app.use( '/api', router );

// app.get('/test', (req, res) => {
//     throw new Error("XXX")
// })

// app.use( invalidRoute );

// app.use( errorHandler );

// clusterInit( app, port );