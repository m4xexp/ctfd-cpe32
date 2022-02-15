import { registerEnumType } from '@nestjs/graphql';

export enum FlagQuestionsScalarFieldEnum {
    flag_question_id = "flag_question_id",
    challenge_id = "challenge_id",
    video_link = "video_link",
    description = "description",
    question = "question",
    answer = "answer",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(FlagQuestionsScalarFieldEnum, { name: 'FlagQuestionsScalarFieldEnum', description: undefined })
