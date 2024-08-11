import IQSet from './../../core/interfaces/IQSet';
import QSet from './../../models/qset.model';

export default (id: string, obj: IQSet) => {
    return QSet.findByIdAndUpdate(id, obj);
}