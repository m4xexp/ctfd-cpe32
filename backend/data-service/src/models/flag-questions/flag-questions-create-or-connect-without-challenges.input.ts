import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FlagQuestionsWhereUniqueInput } from './flag-questions-where-unique.input';
import { FlagQuestionsCreateWithoutChallengesInput } from './flag-questions-create-without-challenges.input';

@InputType()
export class FlagQuestionsCreateOrConnectWithoutChallengesInput {

    @Field(() => FlagQuestionsWhereUniqueInput, {nullable:false})
    where!: FlagQuestionsWhereUniqueInput;

    @Field(() => FlagQuestionsCreateWithoutChallengesInput, {nullable:false})
    create!: FlagQuestionsCreateWithoutChallengesInput;
}
