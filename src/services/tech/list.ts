import ITech from './../../core/interfaces/ITech';
import Tech from './../../models/tech.model';

export default () => {
    return Tech.find({
        where: {
            isActive: true
        }
    });
}

export const listAll = () => {
    return Tech.find();
}

export const listByClauses = (clauses: ITech) => {
    return Tech.find({
        where: {
            ...clauses
        }
    });
}