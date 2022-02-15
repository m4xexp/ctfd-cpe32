import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShortAnswerQuestionsWhereUniqueInput } from './short-answer-questions-where-unique.input';
import { ShortAnswerQuestionsCreateWithoutChallengesInput } from './short-answer-questions-create-without-challenges.input';

@InputType()
export class ShortAnswerQuestionsCreateOrConnectWithoutChallengesInput {

    @Field(() => ShortAnswerQuestionsWhereUniqueInput, {nullable:false})
    where!: ShortAnswerQuestionsWhereUniqueInput;

    @Field(() => ShortAnswerQuestionsCreateWithoutChallengesInput, {nullable:false})
    create!: ShortAnswerQuestionsCreateWithoutChallengesInput;
}
