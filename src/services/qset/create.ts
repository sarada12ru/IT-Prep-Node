
import IQSet from './../../core/interfaces/IQSet';
import QSet from './../../models/qset.model';

export default (obj: IQSet) => {
    return QSet.create(obj);
}