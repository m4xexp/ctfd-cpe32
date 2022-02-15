import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionWhereUniqueInput } from './multiple-choice-question-where-unique.input';
import { MultipleChoiceQuestionCreateWithoutMultipleQuestionsInput } from './multiple-choice-question-create-without-multiple-questions.input';

@InputType()
export class MultipleChoiceQuestionCreateOrConnectWithoutMultipleQuestionsInput {

    @Field(() => MultipleChoiceQuestionWhereUniqueInput, {nullable:false})
    where!: MultipleChoiceQuestionWhereUniqueInput;

    @Field(() => MultipleChoiceQuestionCreateWithoutMultipleQuestionsInput, {nullable:false})
    create!: MultipleChoiceQuestionCreateWithoutMultipleQuestionsInput;
}
