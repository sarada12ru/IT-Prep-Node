const invalidRoute = ( req, res ) => {

    res.status( 500 ).jsonp( { success: false, message: "Invalid API Access Request" } );

}

const errorHandler = ( err, req, res, next ) => {

    if ( res.headersSent ) {

        return next( err );
    
    }

    res.status( 500 ).jsonp( { success: false, message: err.message } );

}

module.exports = {
    invalidRoute,
    errorHandler
}