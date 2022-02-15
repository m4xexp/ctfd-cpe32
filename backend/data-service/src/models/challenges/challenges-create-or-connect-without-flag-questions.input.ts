import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input';
import { ChallengesCreateWithoutFlagQuestionsInput } from './challenges-create-without-flag-questions.input';

@InputType()
export class ChallengesCreateOrConnectWithoutFlagQuestionsInput {

    @Field(() => ChallengesWhereUniqueInput, {nullable:false})
    where!: ChallengesWhereUniqueInput;

    @Field(() => ChallengesCreateWithoutFlagQuestionsInput, {nullable:false})
    create!: ChallengesCreateWithoutFlagQuestionsInput;
}
