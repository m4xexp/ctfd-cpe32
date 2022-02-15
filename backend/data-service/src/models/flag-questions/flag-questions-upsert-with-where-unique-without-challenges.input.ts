import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FlagQuestionsWhereUniqueInput } from './flag-questions-where-unique.input';
import { FlagQuestionsUpdateWithoutChallengesInput } from './flag-questions-update-without-challenges.input';
import { FlagQuestionsCreateWithoutChallengesInput } from './flag-questions-create-without-challenges.input';

@InputType()
export class FlagQuestionsUpsertWithWhereUniqueWithoutChallengesInput {

    @Field(() => FlagQuestionsWhereUniqueInput, {nullable:false})
    where!: FlagQuestionsWhereUniqueInput;

    @Field(() => FlagQuestionsUpdateWithoutChallengesInput, {nullable:false})
    update!: FlagQuestionsUpdateWithoutChallengesInput;

    @Field(() => FlagQuestionsCreateWithoutChallengesInput, {nullable:false})
    create!: FlagQuestionsCreateWithoutChallengesInput;
}
