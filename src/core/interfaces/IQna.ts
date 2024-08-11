export default interface IQSet {
    question: String;
    hint: String;
    answer: String;
    code: String;
    questionSet: String;
    tech: String;
    isActive: Boolean | undefined;
    createdBy: String | undefined;
    createdAt: Date | undefined;
    updatedBy: String | undefined;
    updatedAt: Date | undefined;
}