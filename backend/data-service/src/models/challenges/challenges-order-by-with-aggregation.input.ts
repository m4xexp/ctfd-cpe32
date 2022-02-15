import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ChallengesCountOrderByAggregateInput } from './challenges-count-order-by-aggregate.input';
import { ChallengesAvgOrderByAggregateInput } from './challenges-avg-order-by-aggregate.input';
import { ChallengesMaxOrderByAggregateInput } from './challenges-max-order-by-aggregate.input';
import { ChallengesMinOrderByAggregateInput } from './challenges-min-order-by-aggregate.input';
import { ChallengesSumOrderByAggregateInput } from './challenges-sum-order-by-aggregate.input';

@InputType()
export class ChallengesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    challenge_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    question?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    level_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    types_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    categories_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    award_badge?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    scorce?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max_time?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max_cost?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ChallengesCountOrderByAggregateInput, {nullable:true})
    _count?: ChallengesCountOrderByAggregateInput;

    @Field(() => ChallengesAvgOrderByAggregateInput, {nullable:true})
    _avg?: ChallengesAvgOrderByAggregateInput;

    @Field(() => ChallengesMaxOrderByAggregateInput, {nullable:true})
    _max?: ChallengesMaxOrderByAggregateInput;

    @Field(() => ChallengesMinOrderByAggregateInput, {nullable:true})
    _min?: ChallengesMinOrderByAggregateInput;

    @Field(() => ChallengesSumOrderByAggregateInput, {nullable:true})
    _sum?: ChallengesSumOrderByAggregateInput;
}
