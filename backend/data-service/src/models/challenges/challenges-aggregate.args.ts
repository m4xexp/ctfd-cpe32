import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChallengesWhereInput } from './challenges-where.input';
import { ChallengesOrderByWithRelationInput } from './challenges-order-by-with-relation.input';
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ChallengesCountAggregateInput } from './challenges-count-aggregate.input';
import { ChallengesAvgAggregateInput } from './challenges-avg-aggregate.input';
import { ChallengesSumAggregateInput } from './challenges-sum-aggregate.input';
import { ChallengesMinAggregateInput } from './challenges-min-aggregate.input';
import { ChallengesMaxAggregateInput } from './challenges-max-aggregate.input';

@ArgsType()
export class ChallengesAggregateArgs {

    @Field(() => ChallengesWhereInput, {nullable:true})
    where?: ChallengesWhereInput;

    @Field(() => [ChallengesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ChallengesOrderByWithRelationInput>;

    @Field(() => ChallengesWhereUniqueInput, {nullable:true})
    cursor?: ChallengesWhereUniqueInput;

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
