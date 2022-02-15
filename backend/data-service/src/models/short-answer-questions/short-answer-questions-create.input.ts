import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengesCreateNestedOneWithoutShortAnswerQuestionsInput } from '../challenges/challenges-create-nested-one-without-short-answer-questions.input';

@InputType()
export class ShortAnswerQuestionsCreateInput {

    @Field(() => String, {nullable:true})
    short_answer_question_id?: string;

    @Field(() => String, {nullable:true})
    question?: string;

    @Field(() => String, {nullable:true})
    hint?: string;

    @Field(() => String, {nullable:true})
    answer?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ChallengesCreateNestedOneWithoutShortAnswerQuestionsInput, {nullable:false})
    challenges!: ChallengesCreateNestedOneWithoutShortAnswerQuestionsInput;
}
