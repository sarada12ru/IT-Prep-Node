import ITech from './../../core/interfaces/ITech';
import Tech from './../../models/tech.model';

export default (id: string, obj: ITech) => {
    return Tech.findByIdAndUpdate(id, obj);
}