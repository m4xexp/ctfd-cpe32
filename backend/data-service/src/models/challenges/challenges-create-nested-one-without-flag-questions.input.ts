import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengesCreateWithoutFlagQuestionsInput } from './challenges-create-without-flag-questions.input';
import { ChallengesCreateOrConnectWithoutFlagQuestionsInput } from './challenges-create-or-connect-without-flag-questions.input';
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input';

@InputType()
export class ChallengesCreateNestedOneWithoutFlagQuestionsInput {

    @Field(() => ChallengesCreateWithoutFlagQuestionsInput, {nullable:true})
    create?: ChallengesCreateWithoutFlagQuestionsInput;

    @Field(() => ChallengesCreateOrConnectWithoutFlagQuestionsInput, {nullable:true})
    connectOrCreate?: ChallengesCreateOrConnectWithoutFlagQuestionsInput;

    @Field(() => ChallengesWhereUniqueInput, {nullable:true})
    connect?: ChallengesWhereUniqueInput;
}
