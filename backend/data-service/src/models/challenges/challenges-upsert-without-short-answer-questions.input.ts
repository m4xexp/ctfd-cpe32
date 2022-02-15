import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengesUpdateWithoutShortAnswerQuestionsInput } from './challenges-update-without-short-answer-questions.input';
import { ChallengesCreateWithoutShortAnswerQuestionsInput } from './challenges-create-without-short-answer-questions.input';

@InputType()
export class ChallengesUpsertWithoutShortAnswerQuestionsInput {

    @Field(() => ChallengesUpdateWithoutShortAnswerQuestionsInput, {nullable:false})
    update!: ChallengesUpdateWithoutShortAnswerQuestionsInput;

    @Field(() => ChallengesCreateWithoutShortAnswerQuestionsInput, {nullable:false})
    create!: ChallengesCreateWithoutShortAnswerQuestionsInput;
}
