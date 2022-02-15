import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShortAnswerQuestionsScalarWhereInput } from './short-answer-questions-scalar-where.input';
import { ShortAnswerQuestionsUpdateManyMutationInput } from './short-answer-questions-update-many-mutation.input';

@InputType()
export class ShortAnswerQuestionsUpdateManyWithWhereWithoutChallengesInput {

    @Field(() => ShortAnswerQuestionsScalarWhereInput, {nullable:false})
    where!: ShortAnswerQuestionsScalarWhereInput;

    @Field(() => ShortAnswerQuestionsUpdateManyMutationInput, {nullable:false})
    data!: ShortAnswerQuestionsUpdateManyMutationInput;
}
