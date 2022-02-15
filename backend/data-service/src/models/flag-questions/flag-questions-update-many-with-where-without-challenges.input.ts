import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FlagQuestionsScalarWhereInput } from './flag-questions-scalar-where.input';
import { FlagQuestionsUpdateManyMutationInput } from './flag-questions-update-many-mutation.input';

@InputType()
export class FlagQuestionsUpdateManyWithWhereWithoutChallengesInput {

    @Field(() => FlagQuestionsScalarWhereInput, {nullable:false})
    where!: FlagQuestionsScalarWhereInput;

    @Field(() => FlagQuestionsUpdateManyMutationInput, {nullable:false})
    data!: FlagQuestionsUpdateManyMutationInput;
}
