import IQna from './../../core/interfaces/IQna';
import Qna from './../../models/qna.model';

export default (id: string) => {
    return Qna.findById(id);
}

export const detailsByClause = (clauses: IQna) => {
    return Qna.findOne(clauses);
}