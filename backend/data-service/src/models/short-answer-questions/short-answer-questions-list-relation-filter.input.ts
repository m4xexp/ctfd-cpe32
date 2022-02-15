import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShortAnswerQuestionsWhereInput } from './short-answer-questions-where.input';

@InputType()
export class ShortAnswerQuestionsListRelationFilter {

    @Field(() => ShortAnswerQuestionsWhereInput, {nullable:true})
    every?: ShortAnswerQuestionsWhereInput;

    @Field(() => ShortAnswerQuestionsWhereInput, {nullable:true})
    some?: ShortAnswerQuestionsWhereInput;

    @Field(() => ShortAnswerQuestionsWhereInput, {nullable:true})
    none?: ShortAnswerQuestionsWhereInput;
}
