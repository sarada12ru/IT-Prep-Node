import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../core/helpers/responseHandler";

export const createQNA = (req: Request, res: Response) => {
    try {
        return successResponse(res, {}, 201, "Created Successfully");
    }
    catch(err) {
        return errorResponse(res, {}, 500, "Failed to Create");
    }
}