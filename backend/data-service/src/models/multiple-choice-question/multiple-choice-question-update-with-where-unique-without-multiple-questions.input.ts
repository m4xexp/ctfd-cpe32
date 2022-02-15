import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionWhereUniqueInput } from './multiple-choice-question-where-unique.input';
import { MultipleChoiceQuestionUpdateWithoutMultipleQuestionsInput } from './multiple-choice-question-update-without-multiple-questions.input';

@InputType()
export class MultipleChoiceQuestionUpdateWithWhereUniqueWithoutMultipleQuestionsInput {

    @Field(() => MultipleChoiceQuestionWhereUniqueInput, {nullable:false})
    where!: MultipleChoiceQuestionWhereUniqueInput;

    @Field(() => MultipleChoiceQuestionUpdateWithoutMultipleQuestionsInput, {nullable:false})
    data!: MultipleChoiceQuestionUpdateWithoutMultipleQuestionsInput;
}
