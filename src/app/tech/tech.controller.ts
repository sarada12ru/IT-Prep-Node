import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../core/helpers/responseHandler";
import { ITech } from "../../core/interfaces/ITech";
import { createTechObj } from "./tech.service";

export const createTech = async(req: Request, res: Response) => {
    try {
        await createTechObj(req.body as ITech);
        return successResponse(res, {}, 201, "Created Successfully");
    }
    catch(err) {
        return errorResponse(res, {}, 500, "Failed to Create");
    }
}