import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleQuestionsWhereUniqueInput } from './multiple-questions-where-unique.input';
import { MultipleQuestionsCreateWithoutChallengesInput } from './multiple-questions-create-without-challenges.input';

@InputType()
export class MultipleQuestionsCreateOrConnectWithoutChallengesInput {

    @Field(() => MultipleQuestionsWhereUniqueInput, {nullable:false})
    where!: MultipleQuestionsWhereUniqueInput;

    @Field(() => MultipleQuestionsCreateWithoutChallengesInput, {nullable:false})
    create!: MultipleQuestionsCreateWithoutChallengesInput;
}
