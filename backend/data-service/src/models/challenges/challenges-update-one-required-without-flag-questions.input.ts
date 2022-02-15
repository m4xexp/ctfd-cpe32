import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengesCreateWithoutFlagQuestionsInput } from './challenges-create-without-flag-questions.input';
import { ChallengesCreateOrConnectWithoutFlagQuestionsInput } from './challenges-create-or-connect-without-flag-questions.input';
import { ChallengesUpsertWithoutFlagQuestionsInput } from './challenges-upsert-without-flag-questions.input';
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input';
import { ChallengesUpdateWithoutFlagQuestionsInput } from './challenges-update-without-flag-questions.input';

@InputType()
export class ChallengesUpdateOneRequiredWithoutFlagQuestionsInput {

    @Field(() => ChallengesCreateWithoutFlagQuestionsInput, {nullable:true})
    create?: ChallengesCreateWithoutFlagQuestionsInput;

    @Field(() => ChallengesCreateOrConnectWithoutFlagQuestionsInput, {nullable:true})
    connectOrCreate?: ChallengesCreateOrConnectWithoutFlagQuestionsInput;

    @Field(() => ChallengesUpsertWithoutFlagQuestionsInput, {nullable:true})
    upsert?: ChallengesUpsertWithoutFlagQuestionsInput;

    @Field(() => ChallengesWhereUniqueInput, {nullable:true})
    connect?: ChallengesWhereUniqueInput;

    @Field(() => ChallengesUpdateWithoutFlagQuestionsInput, {nullable:true})
    update?: ChallengesUpdateWithoutFlagQuestionsInput;
}
