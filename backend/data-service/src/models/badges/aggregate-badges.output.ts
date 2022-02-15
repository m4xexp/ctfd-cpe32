import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BadgesCountAggregate } from './badges-count-aggregate.output';
import { BadgesMinAggregate } from './badges-min-aggregate.output';
import { BadgesMaxAggregate } from './badges-max-aggregate.output';

@ObjectType()
export class AggregateBadges {

    @Field(() => BadgesCountAggregate, {nullable:true})
    _count?: BadgesCountAggregate;

    @Field(() => BadgesMinAggregate, {nullable:true})
    _min?: BadgesMinAggregate;

    @Field(() => BadgesMaxAggregate, {nullable:true})
    _max?: BadgesMaxAggregate;
}
