import { errorResponse, successResponse } from "../../core/helpers/responseHandler";
import ITech from "./../../core/interfaces/ITech";
import create from "./../../services/tech/create";
import { listAll } from "./../../services/tech/list";
import update from "./../../services/tech/update";
import _delete from "./../../services/tech/delete";

export const saveTech = async(req: any, res: any) => {
    const id = req.body.id;
    try {
        let response;
        if(id) {
            response = await update(id, req.body as ITech);
        }
        else {
            response = await create(req.body as ITech);
        }
        return successResponse(res, response, 201, `${id ? 'Updated':'Created'} Successfully`);
    }
    catch(err) {
        return errorResponse(res, {}, 500, `Failed to ${id ? 'Update':'Create'} Tech !`);
    }
}

export const listTechs = async(req: any, res: any) => {
    try {
        const techs = await listAll();
        return successResponse(res, techs, 200, "Fetched Successfully");
    }
    catch(err) {
        return errorResponse(res, {}, 500, "Failed to Fetch Techs !");
    }
}

export const removeTech = async(req: any, res: any) => {
    try {
        await _delete(req.params.id);
        return successResponse(res, {}, 200, "Deleted Successfully");
    }
    catch(err) {
        return errorResponse(res, {}, 500, "Failed to Delete Tech !");
    }
}