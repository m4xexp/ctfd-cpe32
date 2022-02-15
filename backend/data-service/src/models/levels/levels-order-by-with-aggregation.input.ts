import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { LevelsCountOrderByAggregateInput } from './levels-count-order-by-aggregate.input';
import { LevelsMaxOrderByAggregateInput } from './levels-max-order-by-aggregate.input';
import { LevelsMinOrderByAggregateInput } from './levels-min-order-by-aggregate.input';

@InputType()
export class LevelsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    level_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => LevelsCountOrderByAggregateInput, {nullable:true})
    _count?: LevelsCountOrderByAggregateInput;

    @Field(() => LevelsMaxOrderByAggregateInput, {nullable:true})
    _max?: LevelsMaxOrderByAggregateInput;

    @Field(() => LevelsMinOrderByAggregateInput, {nullable:true})
    _min?: LevelsMinOrderByAggregateInput;
}
