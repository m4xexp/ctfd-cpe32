import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShortAnswerQuestionsWhereInput } from './short-answer-questions-where.input';
import { ShortAnswerQuestionsOrderByWithRelationInput } from './short-answer-questions-order-by-with-relation.input';
import { ShortAnswerQuestionsWhereUniqueInput } from './short-answer-questions-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ShortAnswerQuestionsScalarFieldEnum } from './short-answer-questions-scalar-field.enum';

@ArgsType()
export class FindFirstShortAnswerQuestionsArgs {

    @Field(() => ShortAnswerQuestionsWhereInput, {nullable:true})
    where?: ShortAnswerQuestionsWhereInput;

    @Field(() => [ShortAnswerQuestionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ShortAnswerQuestionsOrderByWithRelationInput>;

    @Field(() => ShortAnswerQuestionsWhereUniqueInput, {nullable:true})
    cursor?: ShortAnswerQuestionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ShortAnswerQuestionsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ShortAnswerQuestionsScalarFieldEnum>;
}
