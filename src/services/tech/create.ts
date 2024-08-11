import ITech from './../../core/interfaces/ITech';
import Tech from './../../models/tech.model';

export default (obj: ITech) => {
    return Tech.create(obj);
}