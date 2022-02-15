import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShortAnswerQuestionsWhereInput } from './short-answer-questions-where.input';
import { ShortAnswerQuestionsOrderByWithRelationInput } from './short-answer-questions-order-by-with-relation.input';
import { ShortAnswerQuestionsWhereUniqueInput } from './short-answer-questions-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ShortAnswerQuestionsCountAggregateInput } from './short-answer-questions-count-aggregate.input';
import { ShortAnswerQuestionsMinAggregateInput } from './short-answer-questions-min-aggregate.input';
import { ShortAnswerQuestionsMaxAggregateInput } from './short-answer-questions-max-aggregate.input';

@ArgsType()
export class ShortAnswerQuestionsAggregateArgs {

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

    @Field(() => ShortAnswerQuestionsCountAggregateInput, {nullable:true})
    _count?: ShortAnswerQuestionsCountAggregateInput;

    @Field(() => ShortAnswerQuestionsMinAggregateInput, {nullable:true})
    _min?: ShortAnswerQuestionsMinAggregateInput;

    @Field(() => ShortAnswerQuestionsMaxAggregateInput, {nullable:true})
    _max?: ShortAnswerQuestionsMaxAggregateInput;
}
