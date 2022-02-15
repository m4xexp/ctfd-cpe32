import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BadgesCountOrderByAggregateInput } from './badges-count-order-by-aggregate.input';
import { BadgesMaxOrderByAggregateInput } from './badges-max-order-by-aggregate.input';
import { BadgesMinOrderByAggregateInput } from './badges-min-order-by-aggregate.input';

@InputType()
export class BadgesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    badge_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    condition?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    link?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => BadgesCountOrderByAggregateInput, {nullable:true})
    _count?: BadgesCountOrderByAggregateInput;

    @Field(() => BadgesMaxOrderByAggregateInput, {nullable:true})
    _max?: BadgesMaxOrderByAggregateInput;

    @Field(() => BadgesMinOrderByAggregateInput, {nullable:true})
    _min?: BadgesMinOrderByAggregateInput;
}
