import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleQuestionsUpdateWithoutMultipleChoiceQuestionInput } from './multiple-questions-update-without-multiple-choice-question.input';
import { MultipleQuestionsCreateWithoutMultipleChoiceQuestionInput } from './multiple-questions-create-without-multiple-choice-question.input';

@InputType()
export class MultipleQuestionsUpsertWithoutMultipleChoiceQuestionInput {

    @Field(() => MultipleQuestionsUpdateWithoutMultipleChoiceQuestionInput, {nullable:false})
    update!: MultipleQuestionsUpdateWithoutMultipleChoiceQuestionInput;

    @Field(() => MultipleQuestionsCreateWithoutMultipleChoiceQuestionInput, {nullable:false})
    create!: MultipleQuestionsCreateWithoutMultipleChoiceQuestionInput;
}
