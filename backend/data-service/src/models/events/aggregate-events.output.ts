import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EventsCountAggregate } from './events-count-aggregate.output';
import { EventsMinAggregate } from './events-min-aggregate.output';
import { EventsMaxAggregate } from './events-max-aggregate.output';

@ObjectType()
export class AggregateEvents {

    @Field(() => EventsCountAggregate, {nullable:true})
    _count?: EventsCountAggregate;

    @Field(() => EventsMinAggregate, {nullable:true})
    _min?: EventsMinAggregate;

    @Field(() => EventsMaxAggregate, {nullable:true})
    _max?: EventsMaxAggregate;
}
