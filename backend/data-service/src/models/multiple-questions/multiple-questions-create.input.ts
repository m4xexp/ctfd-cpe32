import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengesCreateNestedOneWithoutMultipleQuestionsInput } from '../challenges/challenges-create-nested-one-without-multiple-questions.input';
import { MultipleChoiceQuestionCreateNestedManyWithoutMultipleQuestionsInput } from '../multiple-choice-question/multiple-choice-question-create-nested-many-without-multiple-questions.input';

@InputType()
export class MultipleQuestionsCreateInput {

    @Field(() => String, {nullable:true})
    multiple_question_id?: string;

    @Field(() => String, {nullable:true})
    question?: string;

    @Field(() => String, {nullable:true})
    hint?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ChallengesCreateNestedOneWithoutMultipleQuestionsInput, {nullable:false})
    challenges!: ChallengesCreateNestedOneWithoutMultipleQuestionsInput;

    @Field(() => MultipleChoiceQuestionCreateNestedManyWithoutMultipleQuestionsInput, {nullable:true})
    multipleChoiceQuestion?: MultipleChoiceQuestionCreateNestedManyWithoutMultipleQuestionsInput;
}
