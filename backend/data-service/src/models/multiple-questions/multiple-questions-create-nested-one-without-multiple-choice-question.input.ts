import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleQuestionsCreateWithoutMultipleChoiceQuestionInput } from './multiple-questions-create-without-multiple-choice-question.input';
import { MultipleQuestionsCreateOrConnectWithoutMultipleChoiceQuestionInput } from './multiple-questions-create-or-connect-without-multiple-choice-question.input';
import { MultipleQuestionsWhereUniqueInput } from './multiple-questions-where-unique.input';

@InputType()
export class MultipleQuestionsCreateNestedOneWithoutMultipleChoiceQuestionInput {

    @Field(() => MultipleQuestionsCreateWithoutMultipleChoiceQuestionInput, {nullable:true})
    create?: MultipleQuestionsCreateWithoutMultipleChoiceQuestionInput;

    @Field(() => MultipleQuestionsCreateOrConnectWithoutMultipleChoiceQuestionInput, {nullable:true})
    connectOrCreate?: MultipleQuestionsCreateOrConnectWithoutMultipleChoiceQuestionInput;

    @Field(() => MultipleQuestionsWhereUniqueInput, {nullable:true})
    connect?: MultipleQuestionsWhereUniqueInput;
}
