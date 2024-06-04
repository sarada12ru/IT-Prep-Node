import { Response } from "express";

export const successResponse = (res: Response, data: any, status: number, message: string) => {
    res.status(status).json({message, data});
}

export const errorResponse = (res: Response, info: any, status: number, message: string) => {
    res.status(status).json({errorMessage: message, info});
}