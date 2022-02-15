import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserLoggingsWhereInput } from './user-loggings-where.input';
import { UserLoggingsOrderByWithAggregationInput } from './user-loggings-order-by-with-aggregation.input';
import { UserLoggingsScalarFieldEnum } from './user-loggings-scalar-field.enum';
import { UserLoggingsScalarWhereWithAggregatesInput } from './user-loggings-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserLoggingsCountAggregateInput } from './user-loggings-count-aggregate.input';
import { UserLoggingsMinAggregateInput } from './user-loggings-min-aggregate.input';
import { UserLoggingsMaxAggregateInput } from './user-loggings-max-aggregate.input';

@ArgsType()
export class UserLoggingsGroupByArgs {

    @Field(() => UserLoggingsWhereInput, {nullable:true})
    where?: UserLoggingsWhereInput;

    @Field(() => [UserLoggingsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserLoggingsOrderByWithAggregationInput>;

    @Field(() => [UserLoggingsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserLoggingsScalarFieldEnum>;

    @Field(() => UserLoggingsScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserLoggingsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserLoggingsCountAggregateInput, {nullable:true})
    _count?: UserLoggingsCountAggregateInput;

    @Field(() => UserLoggingsMinAggregateInput, {nullable:true})
    _min?: UserLoggingsMinAggregateInput;

    @Field(() => UserLoggingsMaxAggregateInput, {nullable:true})
    _max?: UserLoggingsMaxAggregateInput;
}
