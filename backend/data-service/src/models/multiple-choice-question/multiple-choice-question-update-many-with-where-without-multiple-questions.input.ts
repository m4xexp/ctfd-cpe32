import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionScalarWhereInput } from './multiple-choice-question-scalar-where.input';
import { MultipleChoiceQuestionUpdateManyMutationInput } from './multiple-choice-question-update-many-mutation.input';

@InputType()
export class MultipleChoiceQuestionUpdateManyWithWhereWithoutMultipleQuestionsInput {

    @Field(() => MultipleChoiceQuestionScalarWhereInput, {nullable:false})
    where!: MultipleChoiceQuestionScalarWhereInput;

    @Field(() => MultipleChoiceQuestionUpdateManyMutationInput, {nullable:false})
    data!: MultipleChoiceQuestionUpdateManyMutationInput;
}
