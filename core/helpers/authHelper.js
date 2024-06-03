const crypto = require( "crypto" );
const uuid = require( "uuid" );
const jsonwebtoken = require( "jsonwebtoken" );
const authSecret = process.env.USER_AUTHENTICATION_SECRET;

const generateSalt = () => {

    return crypto.randomBytes( 16 ).toString( "base64" );

};

const encryptPassword = ( originalPassword, salt ) => {

    return crypto.createHash( "RSA-SHA256" ).update( originalPassword.toString() ).update( salt ).digest( "hex" );
    
};

const generateUUIDv4 = () => {

    return uuid.v4();
    
}

const createJWT = ( userObj ) => {

    return jsonwebtoken.sign( userObj, authSecret,  { expiresIn: '365d' } )

}

const verifyJWT = async( token ) => {

    let userObj;

    try {
        userObj = jsonwebtoken.verify( token, authSecret );
    }
    catch( err ) {

        userObj = false;

    }
    
    return userObj;

}

module.exports = {
    generateSalt,
    encryptPassword,
    generateUUIDv4,
    createJWT,
    verifyJWT
}