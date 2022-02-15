import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TeamsCountOrderByAggregateInput } from './teams-count-order-by-aggregate.input';
import { TeamsMaxOrderByAggregateInput } from './teams-max-order-by-aggregate.input';
import { TeamsMinOrderByAggregateInput } from './teams-min-order-by-aggregate.input';

@InputType()
export class TeamsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    team_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    team_profile_pic?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    conuntry_code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    banned?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    github_link?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    twitter_link?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    facebook_link?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => TeamsCountOrderByAggregateInput, {nullable:true})
    _count?: TeamsCountOrderByAggregateInput;

    @Field(() => TeamsMaxOrderByAggregateInput, {nullable:true})
    _max?: TeamsMaxOrderByAggregateInput;

    @Field(() => TeamsMinOrderByAggregateInput, {nullable:true})
    _min?: TeamsMinOrderByAggregateInput;
}
