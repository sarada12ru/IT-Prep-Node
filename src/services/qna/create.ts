import IQna from './../../core/interfaces/IQna';
import Qna from './../../models/qna.model';

export default (obj: IQna) => {
    return Qna.create(obj);
}