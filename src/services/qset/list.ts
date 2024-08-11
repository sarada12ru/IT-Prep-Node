import IQSet from './../../core/interfaces/IQSet';
import QSet from './../../models/qset.model';

export default () => {
    return QSet.find({
        where: {
            isActive: true
        }
    });
}

export const listAll = () => {
    return QSet.find();
}

export const listByClauses = (clauses: IQSet) => {
    return QSet.find({
        where: {
            ...clauses
        }
    });
}