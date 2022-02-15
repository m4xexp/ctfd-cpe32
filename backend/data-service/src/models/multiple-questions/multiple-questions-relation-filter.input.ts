import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleQuestionsWhereInput } from './multiple-questions-where.input';

@InputType()
export class MultipleQuestionsRelationFilter {

    @Field(() => MultipleQuestionsWhereInput, {nullable:true})
    is?: MultipleQuestionsWhereInput;

    @Field(() => MultipleQuestionsWhereInput, {nullable:true})
    isNot?: MultipleQuestionsWhereInput;
}
