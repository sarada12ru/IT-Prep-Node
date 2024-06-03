import { connect } from "mongoose";
import { config } from "./dbConfig";

const connection = async () => {

    try{
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as any;
        await connect( config.dbURI, options);

        console.log( "Connected to DB" )
    }
    catch( err ) {
        console.log( err )
        process.exit();
    }
}

connection();