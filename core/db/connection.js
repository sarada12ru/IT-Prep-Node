const { connect } = require('mongoose');
const { dbURI } = require( './dbConfig.js' )

const connection = async () => {

    try{
        await connect( dbURI, {
            useNewUrlParser : true,
            useUnifiedTopology : true
        } );

        console.log( "Connected to DB" )
    }
    catch( err ) {
        
        // console.log( "Failed to connect DB" )
        console.log( err )

        process.exit();
    }
}

connection();