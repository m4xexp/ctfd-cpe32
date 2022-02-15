import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserBadgesCountAggregate } from './user-badges-count-aggregate.output';
import { UserBadgesMinAggregate } from './user-badges-min-aggregate.output';
import { UserBadgesMaxAggregate } from './user-badges-max-aggregate.output';

@ObjectType()
export class AggregateUserBadges {

    @Field(() => UserBadgesCountAggregate, {nullable:true})
    _count?: UserBadgesCountAggregate;

    @Field(() => UserBadgesMinAggregate, {nullable:true})
    _min?: UserBadgesMinAggregate;

    @Field(() => UserBadgesMaxAggregate, {nullable:true})
    _max?: UserBadgesMaxAggregate;
}
