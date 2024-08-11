import QSet from './../../models/qset.model';

export default (id: string) => {
    return QSet.findByIdAndDelete(id);
}