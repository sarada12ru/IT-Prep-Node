import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../core/helpers/responseHandler";
import create from "./../../services/qset/create";
import update from "./../../services/qset/update";
import _delete from "./../../services/qset/delete";
import IQSet from "~/core/interfaces/IQSet";
import { listAll } from "./../../services/qset/list";

export const saveQSet = async(req: Request, res: Response) => {
    const id = req.body.id;
    try {
        let response;
        if(id) {
            response = await update(id, req.body as IQSet);
        }
        else {
            response = await create(req.body as IQSet);
        }
        return successResponse(res, response, 201, `${id ? 'Updated':'Created'} Successfully`);
    }
    catch(err) {
        return errorResponse(res, {}, 500, "Failed to Create");
    }
}

export const listQSets = async(req: any, res: any) => {
    try {
        const qSets = await listAll();
        return successResponse(res, qSets, 200, "Fetched Successfully");
    }
    catch(err) {
        return errorResponse(res, {}, 500, "Failed to Fetch Techs !");
    }
}

export const deleteQSet = async(req: Request, res: Response) => {
    try {
        await _delete(req.params.id);
        return successResponse(res, {}, 201, "Deleted Successfully");
    }
    catch(err) {
        return errorResponse(res, {}, 500, "Failed to Delete");
    }
}