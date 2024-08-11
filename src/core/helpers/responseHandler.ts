import { Response } from "express";

export const successResponse = (res: Response, data: any, status: number, message: string) => {
    res.status(status).json({success: true, message, data});
}

export const errorResponse = (res: Response, info: any, status: number, message: string) => {
    res.status(status).json({success: false, errorMessage: message, info});
}