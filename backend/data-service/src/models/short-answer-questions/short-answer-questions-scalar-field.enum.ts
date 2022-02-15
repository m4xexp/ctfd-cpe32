import { registerEnumType } from '@nestjs/graphql';

export enum ShortAnswerQuestionsScalarFieldEnum {
    short_answer_question_id = "short_answer_question_id",
    challenge_id = "challenge_id",
    question = "question",
    hint = "hint",
    answer = "answer",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ShortAnswerQuestionsScalarFieldEnum, { name: 'ShortAnswerQuestionsScalarFieldEnum', description: undefined })
