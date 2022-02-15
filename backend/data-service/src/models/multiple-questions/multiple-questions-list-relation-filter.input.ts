import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleQuestionsWhereInput } from './multiple-questions-where.input';

@InputType()
export class MultipleQuestionsListRelationFilter {

    @Field(() => MultipleQuestionsWhereInput, {nullable:true})
    every?: MultipleQuestionsWhereInput;

    @Field(() => MultipleQuestionsWhereInput, {nullable:true})
    some?: MultipleQuestionsWhereInput;

    @Field(() => MultipleQuestionsWhereInput, {nullable:true})
    none?: MultipleQuestionsWhereInput;
}
