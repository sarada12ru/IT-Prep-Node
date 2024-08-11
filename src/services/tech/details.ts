import ITech from './../../core/interfaces/ITech';
import Tech from './../../models/tech.model';

export default (id: string) => {
    return Tech.findById(id);
}

export const detailsByClause = (clauses: ITech) => {
    return Tech.findOne(clauses);
}