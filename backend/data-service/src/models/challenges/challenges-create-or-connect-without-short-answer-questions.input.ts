import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input';
import { ChallengesCreateWithoutShortAnswerQuestionsInput } from './challenges-create-without-short-answer-questions.input';

@InputType()
export class ChallengesCreateOrConnectWithoutShortAnswerQuestionsInput {

    @Field(() => ChallengesWhereUniqueInput, {nullable:false})
    where!: ChallengesWhereUniqueInput;

    @Field(() => ChallengesCreateWithoutShortAnswerQuestionsInput, {nullable:false})
    create!: ChallengesCreateWithoutShortAnswerQuestionsInput;
}
