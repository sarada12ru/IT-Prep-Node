import IQna from './../../core/interfaces/IQna';
import Qna from './../../models/qna.model';

export default () => {
    return Qna.find({
        where: {
            isActive: true
        }
    });
}

export const listAll = () => {
    return Qna.find();
}

export const listByClauses = (clauses: IQna) => {
    return Qna.find({
        where: {
            ...clauses
        }
    });
}