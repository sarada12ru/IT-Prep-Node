import {Request, Response} from "express";

export const invalidRoute = ( req: Request, res: Response ) => {

    res.status( 500 ).jsonp( { success: false, message: "Invalid API Access Request" } );

}

export const errorHandler = ( err: Error, req: Request, res: Response, next: any ) => {

    if ( res.headersSent ) {

        return next( err );
    
    }

    res.status( 500 ).jsonp( { success: false, message: err.message } );

}