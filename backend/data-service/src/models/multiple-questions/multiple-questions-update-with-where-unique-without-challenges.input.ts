import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleQuestionsWhereUniqueInput } from './multiple-questions-where-unique.input';
import { MultipleQuestionsUpdateWithoutChallengesInput } from './multiple-questions-update-without-challenges.input';

@InputType()
export class MultipleQuestionsUpdateWithWhereUniqueWithoutChallengesInput {

    @Field(() => MultipleQuestionsWhereUniqueInput, {nullable:false})
    where!: MultipleQuestionsWhereUniqueInput;

    @Field(() => MultipleQuestionsUpdateWithoutChallengesInput, {nullable:false})
    data!: MultipleQuestionsUpdateWithoutChallengesInput;
}
