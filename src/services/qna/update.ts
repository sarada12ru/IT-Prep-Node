import IQna from './../../core/interfaces/IQna';
import Qna from './../../models/qna.model';

export default (id: string, obj: IQna) => {
    return Qna.findByIdAndUpdate(id, obj);
}