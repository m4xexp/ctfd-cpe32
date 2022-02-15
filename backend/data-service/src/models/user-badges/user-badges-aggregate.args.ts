import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserBadgesWhereInput } from './user-badges-where.input';
import { UserBadgesOrderByWithRelationInput } from './user-badges-order-by-with-relation.input';
import { UserBadgesWhereUniqueInput } from './user-badges-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserBadgesCountAggregateInput } from './user-badges-count-aggregate.input';
import { UserBadgesMinAggregateInput } from './user-badges-min-aggregate.input';
import { UserBadgesMaxAggregateInput } from './user-badges-max-aggregate.input';

@ArgsType()
export class UserBadgesAggregateArgs {

    @Field(() => UserBadgesWhereInput, {nullable:true})
    where?: UserBadgesWhereInput;

    @Field(() => [UserBadgesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserBadgesOrderByWithRelationInput>;

    @Field(() => UserBadgesWhereUniqueInput, {nullable:true})
    cursor?: UserBadgesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserBadgesCountAggregateInput, {nullable:true})
    _count?: UserBadgesCountAggregateInput;

    @Field(() => UserBadgesMinAggregateInput, {nullable:true})
    _min?: UserBadgesMinAggregateInput;

    @Field(() => UserBadgesMaxAggregateInput, {nullable:true})
    _max?: UserBadgesMaxAggregateInput;
}
