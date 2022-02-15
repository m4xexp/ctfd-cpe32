import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserLoggingsWhereInput } from './user-loggings-where.input';
import { UserLoggingsOrderByWithRelationInput } from './user-loggings-order-by-with-relation.input';
import { UserLoggingsWhereUniqueInput } from './user-loggings-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserLoggingsCountAggregateInput } from './user-loggings-count-aggregate.input';
import { UserLoggingsMinAggregateInput } from './user-loggings-min-aggregate.input';
import { UserLoggingsMaxAggregateInput } from './user-loggings-max-aggregate.input';

@ArgsType()
export class UserLoggingsAggregateArgs {

    @Field(() => UserLoggingsWhereInput, {nullable:true})
    where?: UserLoggingsWhereInput;

    @Field(() => [UserLoggingsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserLoggingsOrderByWithRelationInput>;

    @Field(() => UserLoggingsWhereUniqueInput, {nullable:true})
    cursor?: UserLoggingsWhereUniqueInput;

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
