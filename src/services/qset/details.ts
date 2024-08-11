import IQSet from './../../core/interfaces/IQSet';
import QSet from './../../models/qset.model';

export default (id: string) => {
    return QSet.findById(id);
}

export const detailsByClause = (clauses: IQSet) => {
    return QSet.findOne(clauses);
}