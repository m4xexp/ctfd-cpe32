import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FlagQuestionsWhereUniqueInput } from './flag-questions-where-unique.input';
import { FlagQuestionsUpdateWithoutChallengesInput } from './flag-questions-update-without-challenges.input';

@InputType()
export class FlagQuestionsUpdateWithWhereUniqueWithoutChallengesInput {

    @Field(() => FlagQuestionsWhereUniqueInput, {nullable:false})
    where!: FlagQuestionsWhereUniqueInput;

    @Field(() => FlagQuestionsUpdateWithoutChallengesInput, {nullable:false})
    data!: FlagQuestionsUpdateWithoutChallengesInput;
}
