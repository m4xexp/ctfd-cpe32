import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserLoggingsCountOrderByAggregateInput } from './user-loggings-count-order-by-aggregate.input';
import { UserLoggingsMaxOrderByAggregateInput } from './user-loggings-max-order-by-aggregate.input';
import { UserLoggingsMinOrderByAggregateInput } from './user-loggings-min-order-by-aggregate.input';

@InputType()
export class UserLoggingsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    log_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    action?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ip?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => UserLoggingsCountOrderByAggregateInput, {nullable:true})
    _count?: UserLoggingsCountOrderByAggregateInput;

    @Field(() => UserLoggingsMaxOrderByAggregateInput, {nullable:true})
    _max?: UserLoggingsMaxOrderByAggregateInput;

    @Field(() => UserLoggingsMinOrderByAggregateInput, {nullable:true})
    _min?: UserLoggingsMinOrderByAggregateInput;
}
