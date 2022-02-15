import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FlagQuestionsWhereInput } from './flag-questions-where.input';
import { FlagQuestionsOrderByWithRelationInput } from './flag-questions-order-by-with-relation.input';
import { FlagQuestionsWhereUniqueInput } from './flag-questions-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FlagQuestionsCountAggregateInput } from './flag-questions-count-aggregate.input';
import { FlagQuestionsMinAggregateInput } from './flag-questions-min-aggregate.input';
import { FlagQuestionsMaxAggregateInput } from './flag-questions-max-aggregate.input';

@ArgsType()
export class FlagQuestionsAggregateArgs {

    @Field(() => FlagQuestionsWhereInput, {nullable:true})
    where?: FlagQuestionsWhereInput;

    @Field(() => [FlagQuestionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FlagQuestionsOrderByWithRelationInput>;

    @Field(() => FlagQuestionsWhereUniqueInput, {nullable:true})
    cursor?: FlagQuestionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FlagQuestionsCountAggregateInput, {nullable:true})
    _count?: FlagQuestionsCountAggregateInput;

    @Field(() => FlagQuestionsMinAggregateInput, {nullable:true})
    _min?: FlagQuestionsMinAggregateInput;

    @Field(() => FlagQuestionsMaxAggregateInput, {nullable:true})
    _max?: FlagQuestionsMaxAggregateInput;
}
