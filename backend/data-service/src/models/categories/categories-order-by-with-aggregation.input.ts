import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CategoriesCountOrderByAggregateInput } from './categories-count-order-by-aggregate.input';
import { CategoriesMaxOrderByAggregateInput } from './categories-max-order-by-aggregate.input';
import { CategoriesMinOrderByAggregateInput } from './categories-min-order-by-aggregate.input';

@InputType()
export class CategoriesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    categories_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => CategoriesCountOrderByAggregateInput, {nullable:true})
    _count?: CategoriesCountOrderByAggregateInput;

    @Field(() => CategoriesMaxOrderByAggregateInput, {nullable:true})
    _max?: CategoriesMaxOrderByAggregateInput;

    @Field(() => CategoriesMinOrderByAggregateInput, {nullable:true})
    _min?: CategoriesMinOrderByAggregateInput;
}
