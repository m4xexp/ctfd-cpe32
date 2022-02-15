import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChallengesWhereInput } from './challenges-where.input';
import { ChallengesOrderByWithAggregationInput } from './challenges-order-by-with-aggregation.input';
import { ChallengesScalarFieldEnum } from './challenges-scalar-field.enum';
import { ChallengesScalarWhereWithAggregatesInput } from './challenges-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ChallengesCountAggregateInput } from './challenges-count-aggregate.input';
import { ChallengesAvgAggregateInput } from './challenges-avg-aggregate.input';
import { ChallengesSumAggregateInput } from './challenges-sum-aggregate.input';
import { ChallengesMinAggregateInput } from './challenges-min-aggregate.input';
import { ChallengesMaxAggregateInput } from './challenges-max-aggregate.input';

@ArgsType()
export class ChallengesGroupByArgs {

    @Field(() => ChallengesWhereInput, {nullable:true})
    where?: ChallengesWhereInput;

    @Field(() => [ChallengesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ChallengesOrderByWithAggregationInput>;

    @Field(() => [ChallengesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ChallengesScalarFieldEnum>;

    @Field(() => ChallengesScalarWhereWithAggregatesInput, {nullable:true})
    having?: ChallengesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ChallengesCountAggregateInput, {nullable:true})
    _count?: ChallengesCountAggregateInput;

    @Field(() => ChallengesAvgAggregateInput, {nullable:true})
    _avg?: ChallengesAvgAggregateInput;

    @Field(() => ChallengesSumAggregateInput, {nullable:true})
    _sum?: ChallengesSumAggregateInput;

    @Field(() => ChallengesMinAggregateInput, {nullable:true})
    _min?: ChallengesMinAggregateInput;

    @Field(() => ChallengesMaxAggregateInput, {nullable:true})
    _max?: ChallengesMaxAggregateInput;
}
