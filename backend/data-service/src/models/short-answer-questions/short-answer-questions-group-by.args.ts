import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShortAnswerQuestionsWhereInput } from './short-answer-questions-where.input';
import { ShortAnswerQuestionsOrderByWithAggregationInput } from './short-answer-questions-order-by-with-aggregation.input';
import { ShortAnswerQuestionsScalarFieldEnum } from './short-answer-questions-scalar-field.enum';
import { ShortAnswerQuestionsScalarWhereWithAggregatesInput } from './short-answer-questions-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ShortAnswerQuestionsCountAggregateInput } from './short-answer-questions-count-aggregate.input';
import { ShortAnswerQuestionsMinAggregateInput } from './short-answer-questions-min-aggregate.input';
import { ShortAnswerQuestionsMaxAggregateInput } from './short-answer-questions-max-aggregate.input';

@ArgsType()
export class ShortAnswerQuestionsGroupByArgs {

    @Field(() => ShortAnswerQuestionsWhereInput, {nullable:true})
    where?: ShortAnswerQuestionsWhereInput;

    @Field(() => [ShortAnswerQuestionsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ShortAnswerQuestionsOrderByWithAggregationInput>;

    @Field(() => [ShortAnswerQuestionsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ShortAnswerQuestionsScalarFieldEnum>;

    @Field(() => ShortAnswerQuestionsScalarWhereWithAggregatesInput, {nullable:true})
    having?: ShortAnswerQuestionsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ShortAnswerQuestionsCountAggregateInput, {nullable:true})
    _count?: ShortAnswerQuestionsCountAggregateInput;

    @Field(() => ShortAnswerQuestionsMinAggregateInput, {nullable:true})
    _min?: ShortAnswerQuestionsMinAggregateInput;

    @Field(() => ShortAnswerQuestionsMaxAggregateInput, {nullable:true})
    _max?: ShortAnswerQuestionsMaxAggregateInput;
}
