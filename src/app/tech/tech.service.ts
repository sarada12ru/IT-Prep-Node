import { ITech } from "../../core/interfaces/ITech";
import Tech from "./tech.model";

export const createTechObj = (obj: ITech) => {
    return Tech.create(obj);
}